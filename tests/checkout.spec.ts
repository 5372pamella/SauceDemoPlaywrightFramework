import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { loginData } from '../test-data/loginData';

let loginPage: LoginPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await page.goto('/');

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
});

test('Complete checkout successfully', async ({ page }) => {

    await page.getByRole('button', { name: 'Add to cart' }).first().click();

    
    await cartPage.openCart();

    await cartPage.proceedToCheckout();

    await expect(checkoutPage.checkoutTitle).toBeVisible();

    
    await checkoutPage.enterCustomerInformation(
        'Test',
        'User',
        '4001'
    );

    
    await expect(
        page.getByText('Checkout: Overview', { exact: true })
    ).toBeVisible();

    
    await checkoutPage.finishCheckout();

    await checkoutPage.verifyOrderConfirmation();

    await expect(checkoutPage.confirmationMessage).toBeVisible();
});


