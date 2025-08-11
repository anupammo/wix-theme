// velo-code/public/login-utils.js
import wixUsers from 'wix-users';
import wixLocation from 'wix-location';

/**
 * Checks if a user is currently logged in.
 * @returns {boolean}
 */
export function isLoggedIn() {
  return wixUsers.currentUser.loggedIn;
}

/**
 * Gets basic info about the current user.
 * @returns {Promise<Object>} User details or null
 */
export async function getCurrentUserInfo() {
  const user = wixUsers.currentUser;
  if (!user.loggedIn) return null;

  const userInfo = await user.getEmail()
    .then(email => ({ id: user.id, email }))
    .catch(() => ({ id: user.id, email: null }));

  return userInfo;
}

/**
 * Redirects user if not logged in.
 * @param {string} redirectUrl - URL to redirect to (e.g. "/login")
 */
export function requireLogin(redirectUrl = "/login") {
  if (!isLoggedIn()) {
    wixLocation.to(redirectUrl);
  }
}

/**
 * Logs out the current user and redirects.
 * @param {string} redirectUrl - URL to redirect to after logout
 */
export function logoutUser(redirectUrl = "/") {
  wixUsers.logout()
    .then(() => wixLocation.to(redirectUrl));
}