
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
        await this.page.locator(selector).fill(value);
    }

    async getText(selector) {
        await this.page.waitForSelector(selector).textContent();
    }
}
module.exports = BasePage;