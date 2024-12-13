// calendarPage.js
import {expect} from '@playwright/test';

class CalendarPage {
    constructor(page) {
        this.page = page;
        this.monthYearSelector = '.react-datepicker__current-month';
        this.dayNamesSelector = '.react-datepicker__day-names';
        this.currentDaySelector = '.react-datepicker__day--today';
        this.selectedDaySelector = '.react-datepicker__day--selected';
        this.holidayOverlaySelector = '.holiday-overlay';
        this.disabledDaySelector = '.react-datepicker__day--disabled';
        this.daySelector = (day) => `.react-datepicker__day--${day.toString().padStart(3, '0')}`;
        this.calendarContainer = '.react-datepicker__month-container';
    }

    async verifyMonthYear(expectedMonthYear) {
        const monthYear = await this.page.textContent(this.monthYearSelector);
        expect(monthYear).toBe(expectedMonthYear);
    }

    async verifyDayNames(expectedDayNames) {
        const dayNames = await this.page.$$eval(`${this.dayNamesSelector} .react-datepicker__day-name`, names => names.map(name => name.textContent));
        expect(dayNames).toEqual(expectedDayNames);
    }

    async verifyCurrentDay() {
        const currentDay = await this.page.$(this.currentDaySelector);
        expect(currentDay).not.toBeNull();
    }

    async selectDay(day) {
        await this.page.click(this.daySelector(day));
    }

    async verifySelectedDay(day) {
        const selectedDay = await this.page.$(this.selectedDaySelector);
        const selectedDayText = await selectedDay.textContent();
        expect(selectedDayText).toBe(day.toString());
    }

    async verifyHolidayMarked(holiday) {
        const holidayElement = await this.page.$(`text=${holiday}`);
        expect(holidayElement).not.toBeNull();
    }

    async verifyDisabledDay(day) {
        const disabledDay = await this.page.$(this.daySelector(day));
        await expect(disabledDay).toHaveClass(/react-datepicker__day--disabled/);
    }

    async navigateUsingArrowKeys() {
        await this.page.press(this.currentDaySelector, 'ArrowRight');
        // Add further assertions to verify the highlight
    }

    async clickHolidayDay(holiday) {
        await this.page.click(`text=${holiday}`);
        // Check for tooltip or information box
    }

    async closeAndReopenCalendar() {
        // Add code to close and reopen the calendar
    }

    async attemptToSelectDisabledDay(day) {
        await this.selectDay(day);
        // Add assertion to verify the selected date hasn't changed
    }

    async clickCurrentMonthLabel() {
        await this.page.click(this.monthYearSelector);
        // Check for unexpected behavior
    }

    async navigateToPreviousMonth() {
        // Attempt to navigate to previous month and verify behavior
    }

    async verifyErrorOnInvalidDateSelection() {
        // Attempt to select an invalid date and check for error message
    }

    async rapidClickingOnDays() {
        for (let i = 1; i <= 31; i++) {
            await this.selectDay(i);
        }
        // Verify no crash or freeze
    }

    async accessibilityNavigation() {
        // Simulate screen reader and keyboard navigation
    }

    async performanceWithHolidays(holidays) {
        // Load calendar with holidays and check performance
    }

    async checkDateTimeChange() {
        // Change system date/time and verify calendar updates
    }

    async validateResponsiveness() {
        await this.page.setViewportSize({width: 800, height: 600});
        // Check layout adjustments
    }

    async integrateWithDateInput() {
        // Verify synchronization with date input field
    }
}

module.exports = CalendarPage;