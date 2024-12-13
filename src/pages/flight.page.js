import BasePage from "./base.page";

class FlightPage extends BasePage {
    #PAGE_ID = 'flight-page';

    constructor(page) {
        super(page);
        this.oneWayInput = '[data-testid="One Way-input"]';
        this.roundTripInput = '[data-testid="Round Trip-input"]';
        this.multiCityInput = '[data-testid="Multi City-input"]';
        this.fromAirport = '[data-testid="departure-airport-input-form-1"]';
        this.toAirport = '[data-testid="destination-airport-input-form-1"]';
        this.departureDateButton = '[data-testid="departure-date-input-form-1"]';
        this.returnDateButton = '[data-testid="flight-return-date-selector"]';
        this.searchButton = '[data-testid="search-flight-button"]';
        this.errorMessage = '.error-message-selector'; // Replace with actual selector for error message
        this.swapButton = '[data-testid="airport-city-swap-button"]';
    }

    getPageId() {
        return this.#PAGE_ID;
    }

    getUrl() {
        return "/flight"
    }

    async selectOneWay() {
        await this.click(this.oneWayInput);
    }

    async selectRoundTrip() {
        await this.click(this.roundTripInput);
    }

    async selectMultiCity() {
        await this.click(this.multiCityInput);
    }

    async fillFromAirport(value) {
        await this.type(this.fromAirport, value);
    }

    async fillToAirport(value) {
        await this.type(this.toAirport, value);
    }

    async clickDepartureDate() {
        await this.click(this.departureDateButton);
    }

    async selectDepartureDate(departureDate) {
        await this.click(departureDate);  // need to be updated later
    }

    async clickReturnDate() {
        await this.click(this.returnDateButton);
    }

    async selectReturnDate(returnDate) {
        await this.click(returnDate);
    }

    async clickSearch() {
        await this.page.click(this.searchButton);
    }

    async swapFromAndToAirport() {
        await this.click(this.swapButton);
    }

    async getErrorMessage() {
        return this.getText(this.errorMessage);
    }

    async isSearchButtonDisabled() {
        return this.isDisabled(this.searchButton);
    }
}

module.exports = FlightPage;