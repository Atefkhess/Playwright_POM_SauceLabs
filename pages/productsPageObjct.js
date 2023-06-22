import { expect } from "@playwright/test";

export class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productIcon = page.locator('text=Products')
        this.addTocartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backPackAdded = page.getByRole('link', { name: 'Sauce Labs Backpack' })
        this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.bikeLightAdded = page.getByRole('link', { name: 'Sauce Labs Bike Light' })
        this.removeBackPack = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]')
        this.sortBtn = page.locator('[data-test="product_sort_container"]')
        this.checkoutBtn = page.locator('[data-test="checkout"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.cancelBtn = page.locator('[data-test="cancel"]')
        this.errorMsg = page.locator('[data-test="error"]')
        this.cartContainer = page.locator('#shopping_cart_container a')
        this.filterPrice = '.inventory_item_price'

    }
    async verifyProductPage() {
        const productIconVisible = await this.productIcon.isVisible();
        expect(productIconVisible).toBe(true);
    }
    async addProductsToCart() {

        await this.addTocartBackpack.click();
        await this.addToCartBikeLight.click();
    }
    async checkProductsAdded() {
        await this.cartContainer.click();
        const backPackIsAdded = await this.backPackAdded.isVisible();
        expect(backPackIsAdded).toBe(true);
        const bikeLightIsAdded = await this.bikeLightAdded.isVisible();
        expect(bikeLightIsAdded).toBe(true);
    }
    async removeProductFromCart() {
        await this.removeBackPack.click();

        const backPackIsAdded = await this.backPackAdded.isVisible();
        expect(backPackIsAdded).toBe(false);

    }
    async verifySortedByPrice(page) {
       
            const beforeFilterPriceList = await this.page.$$eval(this.filterPrice, (elements) =>
              elements.map((element) => {
                const priceText = element.textContent.trim();
                const priceValue = parseFloat(priceText.replace('$', ''));
                return priceValue;
              })
            );


        await this.sortBtn.selectOption('lohi')
        //await this.page.waitForTimeout(3000);

        const afterFilterPriceList = await this.page.$$eval(this.filterPrice, (elements) =>
            elements.map((element) => {
                const priceText = element.textContent.trim();
                const priceValue = parseFloat(priceText.replace('$', ''));
                return priceValue;
            })
        );

        console.log(beforeFilterPriceList); // Print the list before sorting
        console.log(afterFilterPriceList); // Print the list after sorting

        const sortedBeforeFilterPriceList = [...beforeFilterPriceList].sort((a, b) => a - b);
        console.log(sortedBeforeFilterPriceList); // Print the list before

        expect(sortedBeforeFilterPriceList).toEqual(afterFilterPriceList);
    }
}


