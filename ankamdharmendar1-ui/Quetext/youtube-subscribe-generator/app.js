// app.js – Core logic for YouTube Subscribe Link Generator

// Utility: show toast messages
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  // Auto hide after 3 seconds
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Utility: copy text to clipboard (modern Clipboard API)
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // avoid scrolling to bottom
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

// Extract YouTube channel identifier from various input forms
function extractChannelId(input) {
  // Trim whitespace
  const str = input.trim();
  // If it's a raw ID (usually starts with UC)
  if (/^UC[\w-]{22,}$/i.test(str)) return str;

  // Try to parse as URL
  try {
    const url = new URL(str);
    if (!url.hostname.includes('youtube.com')) return null;
    // Full channel URL: /channel/ID
    if (url.pathname.startsWith('/channel/')) {
      return url.pathname.split('/')[2];
    }
    // Custom handle: /@handle
    if (url.pathname.startsWith('/@')) {
      // YouTube resolves custom handles to channel IDs via API – we fallback to handle name.
      return url.pathname.substring(2);
    }
    // Shortened URL formats (e.g., youtu.be) are not used for channels.
  } catch (_) {
    // Not a URL – could be a custom handle without @
    if (str.startsWith('@')) return str.substring(1);
    return str; // assume raw ID or custom handle name
  }
  return null;
}

// Main generation handler
document.getElementById('generateBtn').addEventListener('click', () => {
  const input = document.getElementById('channelInput').value;
  if (!input) {
    showToast('Please enter a channel URL, @handle, or ID.', 'error');
    return;
  }
  const id = extractChannelId(input);
  if (!id) {
    showToast('Unable to parse the channel identifier.', 'error');
    return;
  }
  const subscribeLink = `https://www.youtube.com/subscribe_widget?channel=${id}`;
  const resultInput = document.getElementById('resultLink');
  resultInput.value = subscribeLink;
  document.getElementById('outputSection').classList.remove('hidden');
  copyToClipboard(subscribeLink);
  showToast('Link generated & copied to clipboard!', 'success');
});

// Copy button for the generated link
document.getElementById('copyBtn').addEventListener('click', () => {
  const link = document.getElementById('resultLink').value;
  if (!link) return;
  copyToClipboard(link);
  showToast('Copied to clipboard!', 'success');
});
