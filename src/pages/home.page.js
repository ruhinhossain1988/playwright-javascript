import BasePage from "./base.page";
import SignInPage from "./signInPage";
import SignUpPage from "./signup.page";

class HomePage {
    constructor(page) {
        this.page = page;
        this.signInButton = "div[data-testid=home-signin-button]";
        this.signUpButton = 'div[data-testid="home-signup-button"]';
    }
    clickSignInButton() {
        this.page.click(this.signInButton);
        return new SignInPage(this.page);
    }

    clickSignUpButton() {
        this.page.click(this.signUpButton);
        return new SignUpPage(this.page);
    }
}
module.exports = HomePage;