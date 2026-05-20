import { useEffect, useState } from 'react';
import AdSense from './AdSense';
import { CONSENT_EVENT, hasAdConsent } from '../lib/adConsent';

export default function AdPlacement({ slot, className = '' }) {
  const [consentGranted, setConsentGranted] = useState(hasAdConsent);

  useEffect(() => {
    const onConsentChange = () => setConsentGranted(hasAdConsent());
    window.addEventListener(CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange);
  }, []);

  if (!consentGranted || !slot) return null;

  return (
    <aside
      className={`ad-placement my-6 min-h-[120px] md:min-h-[250px] ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-xs text-center text-gray-400 mb-2 uppercase tracking-wider">
        Advertisement
      </p>
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-gray-50/80">
        <AdSense slot={slot} />
      </div>
    </aside>
  );
}
