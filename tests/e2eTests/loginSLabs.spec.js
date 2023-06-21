import { test, expect, beforeEach } from '@playwright/test';
import { loginPage } from '../../pages/loginPageObject';

test('test', async ({ page }) => {

   const Login = new loginPage(page);

   await Login.gotoSauceLabsLogin()
   await Login.loginSauceLabs('standard_user', 'secret_sauce')


});
