import { test, expect, beforeEach } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPageObjct';
import { loginPage } from '../../pages/loginPageObject';

test.beforeEach(async ({ page }) => {
    const login = new loginPage(page);
    await login.gotoSauceLabsLogin();
    await login.loginSauceLabs('standard_user', 'secret_sauce');


})


test('@e2etestAddProductsToCart', async ({ page }) => {

    const product = new ProductsPage(page);

    await product.verifyProductPage();

    await product.addProductsToCart();


    await product.checkProductsAdded();

    await product.removeProductFromCart();


});
test('@e2etestSortedProducts', async ({ page }) => {

    const product = new ProductsPage(page);

    await product.verifySortedByPrice();

}
)

