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



