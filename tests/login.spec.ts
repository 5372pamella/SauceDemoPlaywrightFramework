import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
});

test('Successful login', async ({ page }) => {

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.getByText('Products')).toBeVisible();

});

test('Invalid login', async ({ page }) => {

    await loginPage.login('wrong_user', 'wrong_password');

    await expect(
        page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible();

});

test('Locked out user login', async ({ page }) => {

    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(
        page.getByText('Epic sadface: Sorry, this user has been locked out.')
    ).toBeVisible();

});