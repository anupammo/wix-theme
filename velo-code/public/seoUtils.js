// velo-code/public/seoUtils.js
export function applyMetaTags({ title, description, keywords }) {
  $w('Document').title = title;
  $w('Document').metaDescription = description;
  $w('Document').metaKeywords = keywords;
}