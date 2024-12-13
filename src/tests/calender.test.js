import { test } from '@playwright/test';
import CalendarPage from '../components/calendar.page';

test.describe('Calendar Tests', () => {
    let calendarPage;

    test.beforeEach(async ({ page }) => {
        calendarPage = new CalendarPage(page);
        await page.goto('http://13.229.20.77:6100/');
    });

    test('Verify that the calendar displays the correct month and year', async () => {
        await calendarPage.verifyMonthYear('December 2024');
    });

    test('Ensure that all days of the week are correctly labeled', async () => {
        await calendarPage.verifyDayNames(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
    });

    test('Confirm that the current day is visually distinct from other days', async () => {
        await calendarPage.verifyCurrentDay();
    });

    test('Check that selecting a day updates the selected day visually', async () => {
        await calendarPage.selectDay(16);
        await calendarPage.verifySelectedDay(16);
    });

    test('Validate that holidays are marked correctly with overlays', async () => {
        await calendarPage.verifyHolidayMarked('Christmas Eve');
        await calendarPage.verifyHolidayMarked('Christmas Day');
    });

    test('Ensure that disabled days are visually distinguished', async () => {
        await calendarPage.verifyDisabledDay(2);
    });

    test('Test that navigating through the calendar using keyboard arrow keys highlights the intended day', async () => {
        await calendarPage.navigateUsingArrowKeys();
        // Add assertions to verify the highlight
    });

    test('Confirm that clicking on a holiday day opens a tooltip with details about the holiday', async () => {
        await calendarPage.clickHolidayDay('Christmas Eve');
        // Check for tooltip or information box
    });

    test('Verify that the calendar can be closed and reopened without losing the selected date', async () => {
        await calendarPage.closeAndReopenCalendar();
    });

    test('Attempt to select a disabled day and verify that it does not change the selected date', async () => {
        await calendarPage.attemptToSelectDisabledDay(2);
    });

    test('Check that clicking on the current month label does not lead to any unexpected behavior', async () => {
        await calendarPage.clickCurrentMonthLabel();
    });

    test('Test the behavior when attempting to navigate to a previous month when no previous month is available', async () => {
        await calendarPage.navigateToPreviousMonth();
    });

    test('Verify that an error message appears if the user tries to select a date outside the valid range', async () => {
        await calendarPage.verifyErrorOnInvalidDateSelection();
    });

    test('Ensure that the calendar does not crash or freeze if the user rapidly clicks on different days', async () => {
        await calendarPage.rapidClickingOnDays();
    });

    test('Simulate a user with accessibility needs and verify that the calendar is navigable using a screen reader', async () => {
        await calendarPage.accessibilityNavigation();
    });

    test('Test the calendar\'s performance by loading it with a large number of holidays', async () => {
        await calendarPage.performanceWithHolidays(['Holiday 1', 'Holiday 2']);
    });

    test('Explore the behavior when the user changes the system date/time settings', async () => {
        await calendarPage.checkDateTimeChange();
    });

    test('Validate the calendar’s responsiveness by resizing the browser window', async () => {
        await calendarPage.validateResponsiveness();
    });

    test('Investigate how the calendar behaves when integrated with a date input field', async () => {
        await calendarPage.integrateWithDateInput();
    });
});