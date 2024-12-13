const BasePage = require("../pages/base.page");

class TravellerPage extends BasePage {
    constructor(page) {
        super(page);
        this.adultAddButton = '[data-testid="adult-number-add-button"]';
        this.adultRemoveButton = '[data-testid="adult-number-remove-button"]';
        this.childrenAddButton = '[data-testid="children-number-add-button"]';
        this.childrenRemoveButton = '[data-testid="children-number-remove-button"]';
        this.infantAddButton = '[data-testid="infant-number-add-button"]';
        this.infantRemoveButton = '[data-testid="infant-number-remove-button"]';
        this.adultCount = 'text=1'; // Adjust based on actual selector
        this.childrenCount = 'text=0'; // Adjust based on actual selector
        this.infantCount = 'text=0'; // Adjust based on actual selector
        this.bookingClass = {
            economy: '[data-testid="Economy-class"]',
            premiumEconomy: '[data-testid="Premium Economy-class"]',
            business: '[data-testid="Business-class"]',
            firstClass: '[data-testid="First Class-class"]'
        };
    }

    async addAdult() {
        await this.click(this.adultAddButton);
    }

    async removeAdult() {
        await this.click(this.adultRemoveButton);
    }

    async addChild() {
        await this.click(this.childrenAddButton);
    }

    async removeChild() {
        await this.click(this.childrenRemoveButton);
    }

    async addInfant() {
        await this.click(this.infantAddButton);
    }

    async removeInfant() {
        await this.click(this.infantRemoveButton);
    }

    async selectBookingClass(classType) {
        await this.click(this.bookingClass[classType]);
    }

    async getAdultCount() {
        return this.getText(this.adultCount);
    }

    async getChildrenCount() {
        return this.getText(this.childrenCount);
    }

    async getInfantCount() {
        return this.getText(this.infantCount);
    }
}

module.exports = TravellerPage;