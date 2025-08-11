// velo-code/templates/contact-template.js
/**
 * Controls visibility of the contact section.
 * @param {boolean} showContact - Whether to show the contact section
 */
export function renderContact(showContact = false) {
  if ($w('#contactSection')) {
    showContact ? $w('#contactSection').show() : $w('#contactSection').hide();
  }
}