require('dotenv').config();
const {test, expect} = require('@playwright/test');
const LoginPage = require('../src/pages/login.page');

const {SAUCE_USER, SAUCE_PASS} = process.env;

test.describe("Login Test", () => {
    test('Login test', {
        tag: '@fast'
    }, async ({page}) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to /login');
        await loginPage.navigateTo("/", {waitUntil: 'networkidle'});

        console.log('Performing log-in');
        //await signInPage.signIn(EMAIL, PASS);

        /*await loginPage.fillUsernameField("standard_user");
        await loginPage.fillPasswordField("secret_sauce");
        await loginPage.clickOnLoginButton();*/

        await loginPage.login(SAUCE_USER, SAUCE_PASS);

        expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
    });
});
