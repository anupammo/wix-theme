// velo-code/events/onReady.js
import { fetchSiteSettings } from 'velo-code/public/siteSettings';
import { applyMetaTags } from 'velo-code/public/seoUtils';
import { routePage } from 'velo-code/routers/pageRouter';

$w.onReady(async function () {
  const path = wixLocation.path.join('/');
  const pageSettings = await routePage(`/${path}`);
  const siteSettings = await fetchSiteSettings();

  applyMetaTags({
    title: pageSettings.title || siteSettings.title,
    description: pageSettings.description || siteSettings.description,
    keywords: pageSettings.keywords || siteSettings.keywords
  });

  if (siteSettings.scrollToTop) {
    $w('Document').scrollTo(0);
  }

  if (siteSettings.dynamicYear) {
    $w('#footerYear').text = `${new Date().getFullYear()}`;
  }

  $w('#header').show(pageSettings.layoutHeader);
  $w('#footer').show(pageSettings.layoutFooter);
});