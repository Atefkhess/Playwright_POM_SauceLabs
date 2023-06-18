exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page;
    this.username_textBox = page.locator('[data-test="username"]')
    this.password_textBox = page.locator('[data-test="password"]')
    this.loginBtn = page.locator('[data-test="login-button"]')
}
async gotoSauceLabsLogin() {

    await this.page.goto('https://www.saucedemo.com/');
}
 async loginSauceLabs(username, password) {

    await this.username_textBox.fill(username);
    await this.password_textBox.fill(password);
    await this.loginBtn.click();
 }
}