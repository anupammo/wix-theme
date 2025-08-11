// velo-code/routers/dynamic-router.js
import wixData from 'wix-data';

/**
 * Simulates dynamic routing by fetching page settings from the database.
 * @param {string} path - The current page path (e.g. "/about")
 * @returns {Promise<Object>} Page metadata and layout flags
 */
export async function dynamicRoute(path) {
  try {
    const result = await wixData.query("PageSettings")
      .eq("path", path)
      .limit(1)
      .find();

    if (result.items.length === 0) {
      // Fallback for 404 or unknown paths
      return {
        title: "404 – Page Not Found",
        description: "Sorry, the page you're looking for doesn't exist.",
        keywords: "404, not found",
        layoutHeader: true,
        layoutFooter: true,
        layoutContact: false
      };
    }

    const page = result.items[0];

    return {
      title: page.title || "Untitled Page",
      description: page.description || "",
      keywords: page.keywords || "",
      layoutHeader: page.layoutHeader ?? true,
      layoutFooter: page.layoutFooter ?? true,
      layoutContact: page.layoutContact ?? false
    };
  } catch (error) {
    console.error("Routing error:", error);
    return {
      title: "Error",
      description: "An unexpected error occurred.",
      keywords: "error",
      layoutHeader: true,
      layoutFooter: true,
      layoutContact: false
    };
  }
}