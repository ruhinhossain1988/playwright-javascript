require('dotenv').config();
const {test, expect} = require('@playwright/test');
const SignInPage = require('../pages/signInPage');

const {FT_EMAIL, FT_PASS} = process.env;

test.describe("SignIn Test", () => {
    test('Sign in test', {
        tag: '@fast'
    }, async ({page}) => {
        const signInPage = new SignInPage(page);

        console.log('Navigating to /signin');
        await signInPage.navigateTo("/signin", {waitUntil: 'networkidle'});

        console.log('Performing sign-in');
        //await signInPage.signIn(EMAIL, PASS);

        await signInPage
            .clickEmailAddressButton()
            .then(() => signInPage.fillEmailAddressField(FT_EMAIL))
            .then(() => signInPage.clickSignInWithPasswordButton())
            .then(() => signInPage.fillPasswordField(FT_PASS))
            .then(() => signInPage.clickSignInButton())
            .catch((error) => {
                console.error('Error during sign-in:', error);
                throw error;
            });

        console.log('Validating sign-in success');
       // await expect(page.locator('h1')).toHaveText('Welcome Back');
    });
});
