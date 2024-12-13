import BasePage from "./base.page";

class FlightPage extends BasePage {
    constructor(page) {
        super(page);
    }

    getPageId() {
        return "flight-search-page";
    }
}
exports.module = FlightPage;