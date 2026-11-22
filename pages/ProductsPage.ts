import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly productsTitle: Locator;
    readonly productItems: Locator;
    readonly shoppingCart: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productsTitle = page.getByText('Products', { exact: true });

        this.productItems = page.locator('.inventory_item');

        this.shoppingCart = page.locator('.shopping_cart_link');

        this.sortDropdown = page.locator('.product_sort_container');
    }

    async verifyProductsPage() {
        await this.productsTitle.waitFor({ state: 'visible' });
    }

    async getProductsCount() {
        return await this.productItems.count();
    }

    async sortProductsBy(option: string) {
        await this.sortDropdown.selectOption({ label: option });
    }

    async openShoppingCart() {
        await this.shoppingCart.click();
    }


    async openProduct(productName: string) {
    await this.page.getByText(productName, { exact: true }).click();
}

}



