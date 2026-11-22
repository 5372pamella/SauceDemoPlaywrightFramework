import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly cartItems: Locator;
    readonly cartTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.shoppingCart = page.locator('.shopping_cart_link');

        this.cartItems = page.locator('.cart_item');

        this.cartTitle = page.getByText('Your Cart', { exact: true });

        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });

    }

    async openCart() {
        await this.shoppingCart.click();
    }

    async verifyCartPage() {
        await this.cartTitle.waitFor({ state: 'visible' });
    }

    async getCartItemsCount() {
        return await this.cartItems.count();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async removeProduct(productName: string) {
    await this.page
        .locator('.cart_item')
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Remove' })
        .click();
}

}



