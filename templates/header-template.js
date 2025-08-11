// velo-code/templates/header-template.js
/**
 * Controls visibility and content of the header section.
 * @param {boolean} showHeader - Whether to show the header
 */
export function renderHeader(showHeader = true) {
  if ($w('#header')) {
    showHeader ? $w('#header').show() : $w('#header').hide();
  }
}