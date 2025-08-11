export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export function scrollToElement(selector) {
  const element = $w(selector);
  if (element) {
    element.scrollTo();
  }
}