export const CONSENT_KEY = 'cookie-consent';
export const CONSENT_EVENT = 'cookie-consent-change';

export function getAdConsent() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_KEY);
}

export function hasAdConsent() {
  return getAdConsent() === 'accepted';
}

export function notifyConsentChange() {
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
