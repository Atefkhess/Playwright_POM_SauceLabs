import {test, expect} from '@playwright/test';
import {loginPage} from '../../pages/loginPageObject';

test('test', async ({ page }) => {

const Login =  new loginPage(page);

   await Login.gotoSauceLabsLogin()
   await Login.loginSauceLabs('standard_user','secret_sauce')

//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
});