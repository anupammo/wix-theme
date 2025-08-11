import wixLocation from 'wix-location';
import { setPageSEO, injectJSONLD } from './seo.js';
import siteSettings from './site-settings.json';
import pageSettings from './pages.json';

$w.onReady(() => {
  const currentPath = `/${wixLocation.path.join("/") || ""}`;
  const pageConfig = getPageConfig(currentPath);

  if (pageConfig) {
    applySEO(pageConfig);
    applyLayout(pageConfig.layout);
  }

  if (siteSettings.globals.scrollToTop) {
    setupScrollToTop();
  }

  if (siteSettings.globals.dynamicYear) {
    setDynamicYear();
  }
});

function getPageConfig(path) {
  return pageSettings.pages.find(page => page.path === path);
}

function applySEO(config) {
  setPageSEO({
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(", ")
  });

  if (config.seo?.structuredData) {
    injectJSONLD(config.seo.structuredData);
  }
}

function applyLayout(layout) {
  if (!layout.header) $w("#header").collapse();
  if (!layout.footer) $w("#footer").collapse();
  if (!layout.contactStrip) $w("#contactStrip").collapse();
}

function setupScrollToTop() {
  if ($w("#scrollTop")) {
    $w("#scrollTop").onClick(() => {
      $w("#pageTop").scrollTo();
    });
  }
}

function setDynamicYear() {
  if ($w("#copyrightYear")) {
    $w("#copyrightYear").text = `${new Date().getFullYear()}`;
  }
}