// velo-code/templates/footer-template.js
/**
 * Controls visibility of the footer and injects dynamic year if enabled.
 * @param {boolean} showFooter - Whether to show the footer
 * @param {boolean} dynamicYear - Whether to inject current year
 */
export function renderFooter(showFooter = true, dynamicYear = false) {
  if ($w('#footer')) {
    showFooter ? $w('#footer').show() : $w('#footer').hide();
  }

  if (dynamicYear && $w('#footerYear')) {
    $w('#footerYear').text = `${new Date().getFullYear()}`;
  }
}