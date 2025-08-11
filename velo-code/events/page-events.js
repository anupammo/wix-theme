// velo-code/events/page-event.js
import { routePage } from 'velo-code/routers/pageRouter';
import { fetchSiteSettings } from 'velo-code/public/siteSettings';
import { applyMetaTags } from 'velo-code/public/seoUtils';
import wixLocation from 'wix-location';

$w.onReady(async function () {
  const currentPath = '/' + wixLocation.path.join('/');
  const pageSettings = await routePage(currentPath);
  const siteSettings = await fetchSiteSettings();

  // Apply SEO metadata
  applyMetaTags({
    title: pageSettings.title || siteSettings.title,
    description: pageSettings.description || siteSettings.description,
    keywords: pageSettings.keywords || siteSettings.keywords
  });

  // Scroll to top if enabled
  if (siteSettings.scrollToTop) {
    $w('Document').scrollTo(0);
  }

  // Dynamic year in footer
  if (siteSettings.dynamicYear && $w('#footerYear')) {
    $w('#footerYear').text = `${new Date().getFullYear()}`;
  }

  // Toggle layout components
  if ($w('#header')) {
    pageSettings.layoutHeader ? $w('#header').show() : $w('#header').hide();
  }

  if ($w('#footer')) {
    pageSettings.layoutFooter ? $w('#footer').show() : $w('#footer').hide();
  }

  if ($w('#contactSection')) {
    pageSettings.layoutContact ? $w('#contactSection').show() : $w('#contactSection').hide();
  }
});