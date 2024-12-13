class BasePage {
    constructor(page) {
        if (new.target === BasePage) {
            throw new Error('Cannot instantiate an abstract class.')
        }
        this.page = page;
    }

    async navigateTo(url, options = {}) {
        if (!url || typeof url !== "string") {
            throw new Error("Invalid URL provided.");
        }
        await this.page.goto(url, options);
    }

    async click(selector) {
        await this.waitForSelector(selector);
        await this.page.locator(selector).click({force: true}); // force click if element is obscured
    }

    async type(selector, value) {
        if (!value) {
            throw new Error("Invalid value provided...");
        }
        await this.waitForSelector(selector);
        await this.page.fill(selector, value);
    }

    async getText(selector) {
        await this.waitForSelector(selector);
        return this.page.locator(selector).textContent();
    }

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

    async getPageTitle() {
        return this.page.title();
    }

    getPageId() {
        throw new Error("Abstract method 'getPageId' must be implemented in the subclass.");
    }

    getUrl() {
        throw new Error("Abstract method 'getUrl' must be implemented in the subclass.");
    }

    async currentPageId() {
        return this.page.locator("body").getAttribute("data-test-id");
    }

    async isPage(pageId) {
        if (!pageId || typeof pageId !== "string") { //check selector is falsy like null, undefined, false, 0 or "" string
            throw new Error("Invalid pageId provided for comparison.");
        }
        const currentId = await this.currentPageId();
        return currentId === pageId;
    }

    async isAtPage() {
        return this.isPage(this.getPageId());
    }

}

module.exports = BasePage;