require('dotenv').config();
const {test, expect} = require('@playwright/test');
const SignInPage = require('../src/pages/signInPage');

const {EMAIL, PASS} = process.env;

test.describe("SignIn Test", () => {
    test('Sign in test', async ({page}) => {
        const signInPage = new SignInPage(page);

        console.log('Navigating to /signin');
        await page.goto("/signin", {waitUntil: 'networkidle'});

        console.log('Performing sign-in');
        //await signInPage.signIn(EMAIL, PASS);

        await signInPage
            .clickEmailAddressButton()
            .then(() => signInPage.fillEmailAddressField(EMAIL))
            .then(() => signInPage.clickSignInWithPasswordButton())
            .then(() => signInPage.fillPasswordField(PASS))
            .then(() => signInPage.clickSignInButton())
            .catch((error) => {
                console.error('Error during sign-in:', error);
                throw error;
            });

        console.log('Validating sign-in success');
        await expect(page.locator('h1')).toHaveText('Welcome Back');
    });
});
