// velo-code/public/siteSettings.js
import { getSiteSettings } from 'backend/siteService';

export async function fetchSiteSettings() {
  return await getSiteSettings();
}