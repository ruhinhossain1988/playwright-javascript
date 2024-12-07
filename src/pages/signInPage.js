import BasePage from "./base.page";

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailAddressButton = '[data-testid="auth_email-button"]';
        this.emailAddressField = '[data-testid="auth_email-input"]';
        this.signInWithPasswordButton = '[data-testid="signin-with-password-button"]';
        this.passwordField = '[data-testid="auth_password-input"]';
        this.signInButton = '[class=" px-0 py-1.5 text-xs sm:px-6 sm:text-sm text-white"]';
    }

    async clickEmailAddressButton() {
        console.log('Attempting to click email address button');
        await this.page.locator(this.emailAddressButton).waitFor({ state: 'visible' });
        await this.page.locator(this.emailAddressButton).click();
        console.log('Clicked email address button');
        return this; // Enable chaining
    }

    async fillEmailAddressField(email) {
        console.log('Attempting to fill email address field');
        await this.page.locator(this.emailAddressField).waitFor({ state: 'visible' });
        await this.page.locator(this.emailAddressField).fill(email);
        console.log('Filled email address field');
        return this; // Enable chaining
    }

    async clickSignInWithPasswordButton() {
        await this.page.locator(this.signInWithPasswordButton).waitFor({ state: 'visible' });
        await this.page.locator(this.signInWithPasswordButton).click();
        return this; // Enable chaining
    }

    async fillPasswordField(password) {
        await this.page.locator(this.passwordField).waitFor({ state: 'visible' });
        await this.page.locator(this.passwordField).fill(password);
        return this;
    }

    async clickSignInButton() {
        await this.page.locator(this.signInButton).waitFor({ state: 'visible' });
        await this.page.locator(this.signInButton).click();
        return this;
    }

    async signIn(username, password) {
        console.log('Starting sign-in process');
        await this.clickEmailAddressButton()
            .then(() => this.fillEmailAddressField(username))
            .then(() => this.clickSignInWithPasswordButton())
            .then(() => this.fillPasswordField(password))
            .then(() => this.clickSignInButton())
            .catch((error) => {
                console.error('Error during sign-in:', error);
                throw error;
            });
        console.log('Sign-in process completed');
    }
}

module.exports = SignInPage;
