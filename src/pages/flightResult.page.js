import BasePage from "./base.page";

class FlightResultsPage extends BasePage {
    constructor(page) {
        super(page);
        this.resultCountSelector = '[data-testid=view-flights-result-count] p';
        this.cheapestSortSelector = '[data-testid=CHEAPEST-sort]';
        this.fastestSortSelector = '[data-testid=FASTEST-sort]';
        this.earliestSortSelector = '[data-testid=EARLIEST-sort]';
        this.topAirlinesFilterSelector = '[data-testid=top-airlines-filter]';
    }

    async getResultCount() {
        return await this.textContent(this.resultCountSelector);
    }

    async clickCheapestSort() {
        await this.click(this.cheapestSortSelector);
    }

    async clickFastestSort() {
        await this.click(this.fastestSortSelector);
    }

    async clickEarliestSort() {
        await this.click(this.earliestSortSelector);
    }

    async clickTopAirlineFilter(index) {
        const airlineFilters = await this.page.$$(this.topAirlinesFilterSelector);
        await airlineFilters[index].click();
    }
}

module.exports = FlightResultsPage;