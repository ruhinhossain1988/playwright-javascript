// traveller.test.js
import TravellerPage from "../components/TravellerPage";

const { test, expect } = require('@playwright/test');
test.describe('Traveller Selection Tests', () => {
    let travellerPage;

    test.beforeEach(async ({ page }) => {
        travellerPage = new TravellerPage(page);
        await page.goto('http://13.229.20.77:6100/');
    });

    test('Verify that the user can successfully add an adult traveller', async () => {
        await travellerPage.addAdult();
        expect(await travellerPage.getAdultCount()).toBe('2');
    });

    test('Check that the user can successfully remove an adult traveller', async () => {
        await travellerPage.removeAdult();
        expect(await travellerPage.getAdultCount()).toBe('1');
    });

    test('Ensure that the user can add and remove children and infants', async () => {
        await travellerPage.addChild();
        expect(await travellerPage.getChildrenCount()).toBe('1');
        await travellerPage.removeChild();
        expect(await travellerPage.getChildrenCount()).toBe('0');

        await travellerPage.addInfant();
        expect(await travellerPage.getInfantCount()).toBe('1');
        await travellerPage.removeInfant();
        expect(await travellerPage.getInfantCount()).toBe('0');
    });

    test('Validate that the user can select different booking classes', async () => {
        await travellerPage.selectBookingClass('economy');
        // Add assertion to check visual indication, e.g., check for active class
        await travellerPage.selectBookingClass('business');
        // Add assertion to check visual indication
    });

    test('Confirm that the initial counts for adults, children, and infants are set correctly', async () => {
        expect(await travellerPage.getAdultCount()).toBe('1');
        expect(await travellerPage.getChildrenCount()).toBe('0');
        expect(await travellerPage.getInfantCount()).toBe('0');
    });

    test('Test the visual display of the traveller categories', async () => {
        // Add assertions to check labels visibility
    });

    test('Attempt to remove an adult traveller when the count is at 0', async () => {
        await travellerPage.removeAdult();
        expect(await travellerPage.getAdultCount()).toBe('0');
    });

    test('Try to add more than the allowed maximum number of travellers', async () => {
        for (let i = 0; i < 10; i++) {
            await travellerPage.addAdult();
        }
        // Add assertion to check for error handling or restrictions
    });

    test('Check the behaviour when clicking on booking class options rapidly', async () => {
        // Simulate rapid clicks and check for stability
    });

    test('Verify that the system does not allow adding a child or infant without an adult', async () => {
        await travellerPage.removeAdult();
        await travellerPage.addChild();
        expect(await travellerPage.getChildrenCount()).toBe('0');
    });

    test('Test interaction with disabled buttons', async () => {
        // Simulate disabled state and check for no actions
    });

    test('Simulate a user session adding travellers in various sequences', async () => {
        await travellerPage.addAdult();
        await travellerPage.addChild();
        expect(await travellerPage.getAdultCount()).toBe('2');
        expect(await travellerPage.getChildrenCount()).toBe('1');
    });

    test('Select a booking class, add travellers, and change the booking class', async () => {
        await travellerPage.selectBookingClass('economy');
        await travellerPage.addAdult();
        await travellerPage.selectBookingClass('premiumEconomy');
        // Add assertions to check counts persist
    });

    test('Test UI responsiveness by resizing the browser window', async ({ page }) => {
        await page.setViewportSize({ width: 800, height: 600 });
        // Add assertions to ensure elements remain accessible
    });

    test('Conduct usability tests with different demographics', async () => {
        // Gather feedback on clarity and ease of use
    });

    test('Check if counts persist when navigating away and returning', async () => {
        // Simulate navigation away and back
    });
});