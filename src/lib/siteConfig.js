export const SITE_NAME = 'Quetext.in';
export const SITE_URL = 'https://www.quetext.in';
export const SUPPORT_EMAIL = 'addingemail123@gmail.com';
export const ADSENSE_PUBLISHER_ID = 'ca-pub-8710423330759174';

/** Create ad units in AdSense → Ads → By ad unit, then paste slot IDs in .env */
export const AD_SLOTS = {
  homeTop: import.meta.env.VITE_ADSENSE_SLOT_HOME_TOP || '',
  homeMid: import.meta.env.VITE_ADSENSE_SLOT_HOME_MID || '',
  toolTop: import.meta.env.VITE_ADSENSE_SLOT_TOOL_TOP || '',
  toolBottom: import.meta.env.VITE_ADSENSE_SLOT_TOOL_BOTTOM || '',
};
