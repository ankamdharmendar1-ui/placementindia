import { useLocation } from 'react-router-dom';
import AdPlacement from './AdPlacement';
import { AD_SLOTS } from '../lib/siteConfig';

const LEGAL_PATHS = new Set([
  '/privacy-policy',
  '/terms',
  '/disclaimer',
  '/cookie-policy',
]);

export default function PageAds({ position = 'top' }) {
  const { pathname } = useLocation();

  if (LEGAL_PATHS.has(pathname)) return null;

  let slot = '';
  if (pathname === '/') {
    slot = position === 'top' ? AD_SLOTS.homeTop : AD_SLOTS.homeMid;
  } else {
    slot = position === 'top' ? AD_SLOTS.toolTop : AD_SLOTS.toolBottom;
  }

  if (!slot) return null;

  return (
    <div className="container mx-auto max-w-5xl px-4">
      <AdPlacement slot={slot} />
    </div>
  );
}
