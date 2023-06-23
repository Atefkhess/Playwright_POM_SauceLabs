import { test, expect, chromium } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPageObjct';
import { loginPage } from '../../pages/loginPageObject';

test.describe('E2E Test Suite', () => {
  let browser;
  let context;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({
      slowMo: 3000,
      headless: true,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    context = await browser.newContext({
      recordVideo: {
        dir: 'videos/',
        size: { width: 800, height: 600 },
      },
    });
    page = await context.newPage();
    const login = new loginPage(page);
    await login.gotoSauceLabsLogin();
    await login.loginSauceLabs('standard_user', 'secret_sauce');
  });

  test.afterEach(async () => {
    await context.close();
  });

  test('@e2etestAddProductsToCart', async () => {
    const product = new ProductsPage(page);

    await product.verifyProductPage();

    await product.addProductsToCart();

    await product.checkProductsAdded();

    await page.screenshot({ path: 'images/screenshot.png' });

    await product.removeProductFromCart();
  });

  test('@e2etestSortedProducts', async () => {
    const product = new ProductsPage(page);
    await page.screenshot({ path: 'images/beforeSortScreenshot.png' });
    await product.verifySortedByPrice();
    await page.screenshot({ path: 'images/afterSortScreenshot.png' });
  });
});
