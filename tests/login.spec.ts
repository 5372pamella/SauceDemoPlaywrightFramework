import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
});

test('Successful login', async ({ page }) => {

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await expect(page.getByText('Products')).toBeVisible();

});

test('Invalid login', async ({ page }) => {

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(
        page.getByText('Epic sadface: Username and password do not match any user in this service')
    ).toBeVisible();

});

test('Locked out user login', async ({ page }) => {

    await loginPage.login(
        loginData.lockedOutUser.username,
        loginData.lockedOutUser.password
    );

    await expect(
        page.getByText('Epic sadface: Sorry, this user has been locked out.')
    ).toBeVisible();

});
