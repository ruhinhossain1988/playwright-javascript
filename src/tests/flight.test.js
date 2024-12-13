const { test, expect } = require('@playwright/test');
const FlightPage = require('../pages/flight.page');


test.describe('Flight Search Functionality', () => {
    let flightPage;

    test.beforeEach(async ({ page }) => {
        flightPage = new FlightPage(page);
        await flightPage.navigateTo("/flight", {waitUntil: 'networkidle'});
    });

    test('Verify that selecting "One Way" displays the correct flight search options for oneway travel.', async () => {
        await flightPage.selectOneWay();
        // Add assertions to verify options for one-way travel
    });

    test('Verify that selecting "Round Trip" allows users to input departure and return dates.', async () => {
        await flightPage.selectRoundTrip();
        // Add assertions to verify departure and return date inputs
    });

    test('Verify that selecting "Multi City" enables users to add multiple destinations for their flight search.', async () => {
        await flightPage.selectMultiCity();
        // Add assertions to verify multi-city input functionality
    });

    test('Verify that the input fields for "From" and "To" accept valid airport/city names and do not restrict input length unnecessarily.', async () => {
        await flightPage.fillFromAirport('JFK');
        await flightPage.fillToAirport('LAX');
        // Add assertions to verify input acceptance
    });

    test('Verify that the departure date button displays the current date and allows users to select a future date.', async () => {
        await flightPage.clickDepartureDate();
        // Add assertions to verify current date and future date selection
    });

    test('Verify that the return date button is initially disabled until "Round Trip" is selected.', async () => {
        expect(await flightPage.isSearchButtonDisabled()).toBeTruthy();
        await flightPage.selectRoundTrip();
        expect(await flightPage.isSearchButtonDisabled()).toBeFalsy();
    });

    test('Verify that the "Search" button is clickable and initiates the flight search when all required fields are filled.', async () => {
        await flightPage.selectOneWay();
        await flightPage.fillFromAirport('JFK');
        await flightPage.fillToAirport('LAX');
        await flightPage.clickDepartureDate();
        expect(await flightPage.isSearchButtonDisabled()).toBeFalsy();
        await flightPage.clickSearch();
        // Add assertions to verify search initiation
    });

    test('Verify that the system displays an error message when the user tries to search without selecting a travel type.', async () => {
        await flightPage.fillFromAirport('JFK');
        await flightPage.fillToAirport('LAX');
        await flightPage.clickSearch();
        expect(await flightPage.getErrorMessage()).toContain('Please select a travel type');
    });

    test('Verify that the input fields reject invalid characters (e.g., special characters) when entering airport/city names.', async () => {
        await flightPage.fillToAirport('JFK#@!');
        // Add assertions to verify invalid character rejection
    });

    test('Verify that the system does not allow a return date to be earlier than the departure date.', async () => {
        await flightPage.selectRoundTrip();
        await flightPage.fillFromAirport('JFK');
        await flightPage.fillToAirport('LAX');
        await flightPage.clickDepartureDate();
        // Select a past date for return
        await flightPage.clickReturnDate();
        expect(await flightPage.getErrorMessage()).toContain('Return date cannot be earlier than departure date');
    });

    test('Verify that the "Search" button is disabled until all required fields are correctly filled.', async () => {
        expect(await flightPage.isSearchButtonDisabled()).toBeTruthy();
        await flightPage.selectOneWay();
        expect(await flightPage.isSearchButtonDisabled()).toBeFalsy();
    });

    test('Verify that selecting a travel type does not allow the user to input dates in the past.', async () => {
        await flightPage.selectRoundTrip();
        // Select a past date
        await flightPage.clickReturnDate();
        expect(await flightPage.getErrorMessage()).toContain('Date cannot be in the past');
    });

    test('Verify that no results are returned if the user inputs an invalid airport/city name.', async () => {
        await flightPage.fillFromAirport('InvalidCity');
        await flightPage.fillToAirport('LAX');
        await flightPage.clickSearch();
        // Add assertions to verify no results
    });

    test('Verify the behavior when the user quickly switches between travel types and checks if the input fields reset correctly.', async () => {
        await flightPage.selectRoundTrip();
        await flightPage.fillFromAirport('JFK');
        await flightPage.selectOneWay();
        // Add assertions to verify input fields are reset
    });

    test('Test the functionality of the airport/city swap button to ensure it correctly swaps the values in the "From" and "To" fields.', async () => {
        await flightPage.fillFromAirport('JFK');
        await flightPage.fillToAirport('LAX');
        await flightPage.swapFromAndToAirport();
        // Add assertions to verify values are swapped
    });

    test('Check how the interface responds when a user inputs a very long airport/city name to see if it handles overflow or truncation gracefully.', async () => {
        await flightPage.fillFromAirport('A Very Long Airport Name That Exceeds Normal Length');
        // Add assertions to verify handling of overflow or truncation
    });

    test('Verify that the date picker responds correctly to different formats of date input.', async () => {
        await flightPage.clickDepartureDate();
        // Add assertions to verify date picker functionality
    });

    test('Test the search functionality with various combinations of valid and invalid input to see how the system handles edge cases.', async () => {
        await flightPage.fillFromAirport('DAC');
        await flightPage.fillToAirport('CXB');
        await flightPage.clickSearch();
        // Add assertions to verify edge case handling
    });
});