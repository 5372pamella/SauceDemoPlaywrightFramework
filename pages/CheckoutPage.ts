import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutTitle: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstNameInput = page.locator('#first-name');

        this.lastNameInput = page.locator('#last-name');

        this.postalCodeInput = page.locator('#postal-code');

        this.continueButton = page.getByRole('button', { name: 'Continue' });

        this.finishButton = page.getByRole('button', { name: 'Finish' });

        this.checkoutTitle = page.getByText('Checkout: Your Information', { exact: true });

        this.confirmationMessage = page.getByText('Thank you for your order!', { exact: true });

    }

    async enterCustomerInformation(firstName: string, lastName: string, postalCode: string) {

        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.postalCodeInput.fill(postalCode);

        await this.continueButton.click();

    }

    async finishCheckout() {

        await this.finishButton.click();

    }

    async verifyOrderConfirmation() {

        await this.confirmationMessage.waitFor({ state: 'visible' });

    }
}


