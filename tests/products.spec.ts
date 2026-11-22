import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { loginData } from '../test-data/loginData';

let loginPage: LoginPage;
let productsPage: ProductsPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await page.goto('/');

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

});

test('Verify products page and product count', async () => {

    await productsPage.verifyProductsPage();

    const productCount = await productsPage.getProductsCount();

    expect(productCount).toBe(6);

});


test('Sort products by price from low to high', async ({ page }) => {

    await productsPage.sortProductsBy('Price (low to high)');

    const prices = await page.locator('.inventory_item_price').allTextContents();

    const numericPrices = prices.map(price =>
        Number(price.replace('$', ''))
    );

    const sortedPrices = [...numericPrices].sort((a, b) => a - b);

    expect(numericPrices).toEqual(sortedPrices);

});


    test('Verify user can open product details', async ({ page }) => {

    await productsPage.openProduct('Sauce Labs Backpack');

    await expect(
        page.getByText('Sauce Labs Backpack', { exact: true })
    ).toBeVisible();

    await expect(
    page.locator('div.inventory_details')
    ).toBeVisible();

});





