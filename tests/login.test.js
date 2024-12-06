require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/login.page');

const { EMAIL, PASS } = process.env;

test.describe("Login Test", () => {
    test("User can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/');
        await loginPage.fillUsernameField(EMAIL);
        await loginPage.fillPasswordField(PASS);
        await loginPage.clickOnLoginButton();
        await expect(page).toHaveURL('inventory.html');
    })
})