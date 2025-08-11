import wixSeo from 'wix-seo';

export function setPageSEO({ title, description, keywords }) {
  wixSeo.setTitle(title);
  wixSeo.setMetaTags([
    { name: "description", content: description },
    { name: "keywords", content: keywords }
  ]);
}

export function injectJSONLD(schemaObject) {
  const script = `<script type="application/ld+json">${JSON.stringify(schemaObject)}</script>`;
  $w("#seoContainer").html = script;
}