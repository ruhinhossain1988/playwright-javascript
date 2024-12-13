class BasePage {
    /**
     * Represents the Playwright Page instance
     */
    constructor(page) {
        if (new.target === BasePage) {
            throw new Error('Cannot instantiate an abstract class.')
        }
        this.page = page;
    }

    /**
     * Navigates to a specified URL with additional options.
     * @param {string} url - The URL to navigate to.
     * @param {object} [options] - Optional navigation options (e.g., timeout).
     */
    async navigateTo(url, options = {}) {
        if (!url || typeof url !== "string") {
            throw new Error("Invalid URL provided.");
        }
        console.log(`Navigating to ${url} to ${options.waitUntil} ruhin`);
        await this.page.goto(url, options);
    }

    /**
     * Clicks on an element specified by the selector.
     * Waits for the element to be visible before clicking.
     * @param {string} selector - The CSS selector of the element to click.
     */
    async click(selector) {
        await this.waitForSelector(selector);
        await this.page.locator(selector).click({force: true}); // force click if element is obscured
    }

    /**
     * Types a value into an input field specified by the selector.
     * Waits for the element to be visible before typing.
     * @param {string} selector - The CSS selector of the input field.
     * @param {string} value - The value to type into the field.
     */
    async type(selector, value) {
        if (!value) {
            throw new Error("Invalid value provided...");
        }
        await this.waitForSelector(selector);
        await this.page.fill(selector, value);
    }

    /**
     * Retrieves the text content from an element specified by the selector.
     * @param {string} selector - The CSS selector of the element to retrieve text from.
     * @returns {string} - The text content of the element.
     */
    async getText(selector) {
        await this.waitForSelector(selector);
        return this.page.locator(selector).textContent();
    }

    /**
     * Waits for an element specified by the selector to be visible.
     * @param {string} selector - The CSS selector of the element to wait for.
     */
    async waitForSelector(selector) {
        if (!selector || typeof selector !== "string") {  //check selector is falsy like null, undefined, false, 0 or "" string
            throw new Error("Invalid selector provided.");
        }
        try {
            await this.page.locator(selector).waitFor({state: 'visible', timeout: 5000}); // Timeout added for better control
        } catch (error) {
            throw new Error(`Element with selector '${selector}' not visible within the timeout.`);
        }
    }

    /**
     * Retrieves the current page's title.
     * @returns {string} - The title of the current page.
     */
    async getPageTitle() {
        return this.page.title();
    }

    /**
     * Abstract method to get the page ID. Must be implemented in the subclass.
     * @returns {string} - The page ID.
     */
    getPageId() {
        throw new Error("Abstract method 'getPageId' must be implemented in the subclass.");
    }

    /**
     * Abstract method to get the page URL. Must be implemented in the subclass.
     * @returns {string} - The page URL.
     */
    getUrl() {
        throw new Error("Abstract method 'getUrl' must be implemented in the subclass.");
    }

    /**
     * Retrieves the current page's ID from the data-test-id attribute of the body element.
     * @returns {string} - The current page's ID.
     */
    async currentPageId() {
        return this.page.locator("body").getAttribute("data-test-id");
    }

    /**
     * Checks if the current page matches the provided page ID.
     * @param {string} pageId - The page ID to compare.
     * @returns {boolean} - True if the page ID matches, false otherwise.
     */
    async isPage(pageId) {
        if (!pageId || typeof pageId !== "string") { //check selector is falsy like null, undefined, false, 0 or "" string
            throw new Error("Invalid pageId provided for comparison.");
        }
        const currentId = this.currentPageId();
        return currentId === pageId;
    }

    /**
     * Checks if the current page matches the page ID of this class.
     * @returns {boolean} - True if the current page matches this class's page ID.
     */
    async isAtPage() {
        return this.isPage(this.getPageId());
    }

}

module.exports = BasePage;