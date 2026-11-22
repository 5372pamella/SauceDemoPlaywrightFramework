# SauceDemo Playwright Automation Framework

![Playwright Tests](https://github.com/5372pamella/SauceDemoPlaywrightFramework/actions/workflows/playwright.yml/badge.svg)

## Project Overview

This project is a web automation testing framework built using **Playwright with TypeScript**.

The framework automates key user journeys on the SauceDemo e-commerce website, including login, product selection, shopping cart management, and checkout.

The purpose of this project is to demonstrate practical software testing skills, including test automation, Page Object Model (POM), positive and negative testing, test reporting, and Continuous Integration (CI) using GitHub Actions.

## Technologies and Tools

- **Playwright** – Browser automation and end-to-end testing.
- **TypeScript** – Programming language used to write automated tests.
- **Node.js** – JavaScript runtime environment.
- **Visual Studio Code** – Development environment.
- **Git and GitHub** – Version control and source code management.
- **GitHub Actions** – Continuous Integration (CI) and automated test execution.
- **Playwright HTML Reporter** – Test execution reports.

## Test Coverage

### 1. Login Tests

- Verify successful login with valid credentials.
- Verify login with invalid credentials.
- Verify login using a locked-out user account.

### 2. Products Tests

- Verify the products page and product count.
- Verify product sorting by price (low to high).
- Verify users can open product details.

### 3. Shopping Cart Tests

- Verify users can add products to the shopping cart.
- Verify users can remove products from the shopping cart.

### 4. Checkout Tests

- Verify successful checkout and order confirmation.
- Verify checkout validation when the first name is missing.
- Verify checkout validation when the last name is missing.
- Verify checkout validation when the postal code is missing.

**Total automated test cases: 12**

## Project Structure

```text
SauceDemoPlaywrightFramework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── test-data/
│   └── loginData.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git
- Visual Studio Code

### Clone the Repository

```bash
git clone https://github.com/5372pamella/SauceDemoPlaywrightFramework.git
```

### Navigate to the Project Folder

```bash
cd SauceDemoPlaywrightFramework
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run a Specific Test File

```bash
npx playwright test tests/login.spec.ts
```

### View the HTML Test Report

```bash
npx playwright show-report
```