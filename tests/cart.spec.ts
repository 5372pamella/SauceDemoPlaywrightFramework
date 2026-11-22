import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { loginData } from '../test-data/loginData';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await page.goto('/');

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

});

test('Verify user can add a product to the shopping cart', async ({ page }) => {

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await cartPage.openCart();

    await cartPage.verifyCartPage();

    const cartItemsCount = await cartPage.getCartItemsCount();

    expect(cartItemsCount).toBe(1);

});


    test('Verify user can remove a product from the shopping cart', async ({ page }) => {

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    await cartPage.openCart();

    await cartPage.removeProduct('Sauce Labs Backpack');

    const cartItemsCount = await cartPage.getCartItemsCount();

    expect(cartItemsCount).toBe(0);

});




