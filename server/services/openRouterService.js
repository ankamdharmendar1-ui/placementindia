const axios = require('axios');
require('dotenv').config();

// ─── API Key Rotation System ───────────────────────────────────────────
// Loads all comma-separated keys from GOOGLE_API_KEYS env variable.
// On a 429 (rate limit) error, automatically rotates to the next key.
// Tracks cooldown per key so exhausted keys are skipped temporarily.

const ALL_KEYS = (process.env.GOOGLE_API_KEYS || process.env.GOOGLE_API_KEY || '')
  .split(',')
  .map(k => k.trim())
  .filter(k => k.length > 0);

if (ALL_KEYS.length === 0) {
  console.error('[KeyRotation] ⚠️  No Google API keys found! Set GOOGLE_API_KEYS in .env');
}

// Track state per key: { cooldownUntil: timestamp }
const keyState = {};
ALL_KEYS.forEach(key => {
  keyState[key] = { cooldownUntil: 0 };
});

let currentKeyIndex = 0;

/**
 * Get the next available API key, skipping any that are on cooldown.
 * @returns {string|null} A valid API key or null if all are exhausted.
 */
function getAvailableKey() {
  const now = Date.now();
  const totalKeys = ALL_KEYS.length;

  for (let i = 0; i < totalKeys; i++) {
    const idx = (currentKeyIndex + i) % totalKeys;
    const key = ALL_KEYS[idx];
    if (keyState[key].cooldownUntil <= now) {
      currentKeyIndex = idx;
      return key;
    }
  }

  // All keys on cooldown — find the one that recovers soonest
  let soonestKey = ALL_KEYS[0];
  let soonestTime = keyState[soonestKey].cooldownUntil;
  for (const key of ALL_KEYS) {
    if (keyState[key].cooldownUntil < soonestTime) {
      soonestTime = keyState[key].cooldownUntil;
      soonestKey = key;
    }
  }
  return soonestKey;
}

/**
 * Mark a key as rate-limited with a cooldown period.
 * @param {string} key - The API key to put on cooldown.
 * @param {number} cooldownMs - Cooldown duration in milliseconds (default 60s).
 */
function markKeyExhausted(key, cooldownMs = 60000) {
  const maskedKey = key.slice(0, 6) + '...' + key.slice(-4);
  console.log(`[KeyRotation] 🔄 Key ${maskedKey} hit rate limit — cooling down for ${cooldownMs / 1000}s`);
  keyState[key].cooldownUntil = Date.now() + cooldownMs;
  // Advance to next key
  currentKeyIndex = (ALL_KEYS.indexOf(key) + 1) % ALL_KEYS.length;
}

// ─── Gemini API Call ───────────────────────────────────────────────────

const DEFAULT_MODEL = 'gemini-2.0-flash';

/**
 * Calls the Google Gemini API with automatic key rotation on rate limits.
 * Function name kept as callOpenRouter for backwards compatibility.
 * @param {string} systemPrompt - The system instruction context.
 * @param {string} userPrompt - The user's input text.
 * @param {object} options - Optional overrides (e.g., model, temperature).
 * @returns {Promise<string>} - The generated response text.
 */
async function callOpenRouter(systemPrompt, userPrompt, options = {}) {
  const model = options.model || DEFAULT_MODEL;
  const temperature = options.temperature !== undefined ? options.temperature : 0.7;
  const maxRetries = Math.min(ALL_KEYS.length, 3); // Try up to 3 different keys

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const apiKey = getAvailableKey();

    if (!apiKey) {
      throw new Error('No Google API keys available. Please add keys to GOOGLE_API_KEYS in .env');
    }

    const maskedKey = apiKey.slice(0, 6) + '...' + apiKey.slice(-4);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
            }
          ],
          generationConfig: {
            temperature: temperature,
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 30000
        }
      );

      if (
        response.data &&
        response.data.candidates &&
        response.data.candidates.length > 0 &&
        response.data.candidates[0].content &&
        response.data.candidates[0].content.parts &&
        response.data.candidates[0].content.parts.length > 0
      ) {
        console.log(`[DeepCheck] ✅ Gemini (${model}) key ${maskedKey} — SUCCESS`);
        return response.data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format from Google Gemini API.');
      }
    } catch (error) {
      const status = error.response ? error.response.status : null;
      const errData = error.response ? error.response.data : error.message;

      if (status === 429) {
        // Parse retry delay from response if available
        let cooldownMs = 60000;
        try {
          const retryInfo = error.response.data?.error?.details?.find(
            d => d['@type']?.includes('RetryInfo')
          );
          if (retryInfo && retryInfo.retryDelay) {
            const seconds = parseInt(retryInfo.retryDelay);
            if (!isNaN(seconds)) cooldownMs = seconds * 1000;
          }
        } catch (_) {}

        markKeyExhausted(apiKey, cooldownMs);

        if (attempt < maxRetries) {
          console.log(`[KeyRotation] 🔁 Retrying with next key (attempt ${attempt + 2}/${maxRetries + 1})...`);
          continue; // Try next key
        }
      }

      // Not a rate limit error, or no more retries
      console.error(`[DeepCheck] ❌ Gemini (${model}) key ${maskedKey} — FAILED:`, 
        typeof errData === 'object' ? JSON.stringify(errData).substring(0, 200) : errData
      );
      throw error;
    }
  }

  throw new Error('All Google API keys exhausted. Please try again later or add more keys.');
}

// ─── Status Helper ─────────────────────────────────────────────────────

/**
 * Returns the current status of all API keys (for debugging/monitoring).
 */
function getKeyStatus() {
  const now = Date.now();
  return ALL_KEYS.map((key, idx) => ({
    index: idx,
    key: key.slice(0, 6) + '...' + key.slice(-4),
    active: idx === currentKeyIndex,
    onCooldown: keyState[key].cooldownUntil > now,
    cooldownRemaining: Math.max(0, Math.round((keyState[key].cooldownUntil - now) / 1000)) + 's'
  }));
}

console.log(`[KeyRotation] 🔑 Loaded ${ALL_KEYS.length} Google API key(s)`);

module.exports = { callOpenRouter, getKeyStatus };
