/**
 * Checks if the current document.title matches the provided SEO title.
 * @param {string} seoTitle - The title provided to the SEO component.
 * @returns {boolean} - Returns true if it matches, false otherwise.
 */
export function checkTitleMatch(seoTitle) {
    if (!seoTitle) return false;

    const currentTitle = document.title?.trim();
    const expectedTitle = seoTitle.trim();

    return currentTitle === expectedTitle;
}
