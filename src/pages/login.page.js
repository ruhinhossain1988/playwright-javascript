import BasePage from "./base.page";

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.usernameField = "#user-name";
        this.passwordField = "#password";
        this.loginbutton = "#login-button";
    }

    getPageId() {
        return "LoginPage";
    }

    getUrl() {
        return "/login";
    }

    async fillUsernameField(username){
        console.log(username);
        await this.type(this.usernameField, username);
    }

    async fillPasswordField(password){
        console.log(password);
        await this.type(this.passwordField, password);
    }

    async clickOnLoginButton(){
        await this.click(this.loginbutton);
    }

    async login(username, password) {
        await this.fillUsernameField(username);
        await this.fillPasswordField(password);
        await this.clickOnLoginButton();
    }
}
module.exports = LoginPage;