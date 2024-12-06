const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/login.page');
require('dotenv').config();

const { EMAIL, PASS } = process.env;

test.describe("Login Test", () => {
    test("User can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/');
        await loginPage.login(EMAIL, PASS);
        await expect(page).toHaveURL('inventory.html');
    })
})