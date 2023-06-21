import { expect } from "@playwright/test";

export class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productIcon = page.locator('text=Products')
        this.addTocartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.removeBackPack = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]')
        this.sortBtn = page.locator('[data-test="product_sort_container"]')
        this.checkoutBtn = page.locator('[data-test="checkout"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.cancelBtn = page.locator('[data-test="cancel"]')
        this.errorMsg = page.locator('[data-test="error"]')
        this.cartContainer = page.locator('#shopping_cart_container a')
    }
    async verifyProductPage() {
        const productIconVisible = await this.productIcon.isVisible();
        expect(productIconVisible).toBe(true);
    }
    async addProductsToCart() {

        await this.addTocartBackpack().click();
        await this.addToCartBikeLight().click();
    }

}