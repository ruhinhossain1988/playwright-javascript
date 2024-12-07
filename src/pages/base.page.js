
class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.locator(selector).click();
    }

    async type(selector, value) {
        await this.page.fill(selector, value);
    }

    async getText(selector) {
        return await this.page.locator(selector).textContent();
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }
}
module.exports = BasePage;