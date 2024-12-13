import BasePage from "./base.page";

class FlightPage extends BasePage {
    #PAGE_ID = 'flight-page';

    constructor(page) {
        super(page);
    }

    getPageId() {
        return this.#PAGE_ID;
    }

    getUrl() {
        return "/flight"
    }


}

exports.module = FlightPage;