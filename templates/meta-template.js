// velo-code/templates/meta-template.js
/**
 * Applies SEO metadata to the document.
 * @param {Object} meta - Metadata object
 * @param {string} meta.title
 * @param {string} meta.description
 * @param {string} meta.keywords
 */
export function applyMetaTemplate({ title, description, keywords }) {
  $w('Document').title = title || "Untitled Page";
  $w('Document').metaDescription = description || "";
  $w('Document').metaKeywords = keywords || "";
}