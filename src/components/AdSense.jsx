import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ADSENSE_PUBLISHER_ID } from '../lib/siteConfig';
import { hasAdConsent } from '../lib/adConsent';

export default function AdSense({
  slot,
  format = 'auto',
  layout,
  layoutKey,
  className = '',
  style = { display: 'block', minHeight: '90px' },
}) {
  const insRef = useRef(null);
  const pushedRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    pushedRef.current = false;
  }, [location.pathname, slot]);

  useEffect(() => {
    if (!slot || !hasAdConsent() || !insRef.current) return undefined;

    const pushAd = () => {
      if (pushedRef.current || !insRef.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch (err) {
        console.error('AdSense load error:', err);
      }
    };

    if (window.adsbygoogle) {
      pushAd();
      return undefined;
    }

    const timer = window.setInterval(() => {
      if (window.adsbygoogle) {
        window.clearInterval(timer);
        pushAd();
      }
    }, 200);

    return () => window.clearInterval(timer);
  }, [location.pathname, slot]);

  if (!slot || !hasAdConsent()) return null;

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      {...(layout ? { 'data-ad-layout': layout } : {})}
      {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
    />
  );
}
