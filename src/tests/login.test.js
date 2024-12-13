require('dotenv').config();
const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/login.page');

const {SAUCE_USER, SAUCE_PASS} = process.env;

test.describe("Login Test", () => {
    test('Login test', {
        tag: '@fast'
    }, async ({page}) => {
        const loginPage = new LoginPage(page);

        //console.log('Navigating to /login');
        await loginPage.navigateTo("/", {waitUntil: 'networkidle'});

        console.log('Performing log-in');
        //await signInPage.signIn(EMAIL, PASS);

        await loginPage.fillUsernameField(SAUCE_USER);
        await loginPage.fillPasswordField(SAUCE_PASS);
        await loginPage.clickOnLoginButton();

        expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
    });
});
