class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url, options) {
        await this.page.goto(url, options);
    }

    async click(selector) {
        await this.waitForSelector(selector);
        await this.page.locator(selector).click();
    }

    async type(selector, value) {
        await this.waitForSelector(selector);
        await this.page.fill(selector, value);
    }

    async getText(selector) {
        await this.waitForSelector(selector);
        return await this.page.locator(selector).textContent();
    }

    async waitForSelector(selector) {
        await this.page.locator(selector).waitFor({ state: 'visible' });
    }

    getPageId(){
        throw new Error('getPageId() must be implemented by subclass')
    }
}
module.exports = BasePage;