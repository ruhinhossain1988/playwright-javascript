import {test, expect} from '@playwright/test';
import FlightResultsPage from '../pages/flightResult.page';

test.describe('Flight Results Page Tests', () => {
    let flightResultsPage;

    test.beforeEach(async ({page}) => {
        await flightResultsPage.navigateTo("/", {waitUntil: 'networkidle'});
        flightResultsPage = new FlightResultsPage(page);
    });

    test('should display the correct number of flights', async () => {
        const resultCount = await flightResultsPage.getResultCount();
        expect(resultCount).toContain('Showing 33 Flights');
    });

    test('should sort flights by cheapest', async () => {
        await flightResultsPage.clickCheapestSort();
        const resultCount = await flightResultsPage.getResultCount();
        expect(resultCount).toContain('Showing 33 Flights');
    });

    test('should sort flights by fastest', async () => {
        await flightResultsPage.clickFastestSort();
        const resultCount = await flightResultsPage.getResultCount();
        expect(resultCount).toContain('Showing 33 Flights');
    });

    test('should sort flights by earliest', async () => {
        await flightResultsPage.clickEarliestSort();
        const resultCount = await flightResultsPage.getResultCount();
        expect(resultCount).toContain('Showing 33 Flights');
    });

    test('should filter by top airlines', async () => {
        await flightResultsPage.clickTopAirlineFilter(0); // Click first airline filter
        const resultCount = await flightResultsPage.getResultCount();
        expect(resultCount).toContain('Showing 33 Flights');
    });
});
