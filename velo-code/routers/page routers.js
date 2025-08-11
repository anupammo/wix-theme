// velo-code/routers/pageRouter.js
import { getPageSettings } from 'backend/pageService';

export async function routePage(path) {
  const settings = await getPageSettings(path);
  if (!settings) {
    return {
      title: "404 – Page Not Found",
      description: "The page you're looking for doesn't exist.",
      layoutHeader: true,
      layoutFooter: true
    };
  }
  return settings;
}