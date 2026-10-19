# Playwright TypeScript Automation Framework

An independent hands-on portfolio project demonstrating UI test automation using Playwright and TypeScript.

## Project Status

**Status:** In Progress

## Technology Stack

- Playwright Test
- TypeScript
- Node.js and npm
- Page Object Model (POM)
- Custom Playwright fixtures

## Implemented and Verified

- Positive login test against SauceDemo
- Negative login test for invalid credentials
- Reusable `LoginPage` page object
- Centralized application base URL
- Custom fixture for injecting `LoginPage` into tests

## Getting Started

Install dependencies:

```bash
npm ci
npx playwright install chromium
```

Run the login tests:

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

Run tests with a visible browser:

```bash
npx playwright test tests/login.spec.ts --project=chromium --headed
```

## Planned Enhancements

- Product and shopping cart workflows
- Additional page objects and reusable fixtures
- API automation
- Test data and environment configuration
- Failure diagnostics and reporting
- GitHub Actions CI/CD
- Optional AI-assisted test failure analysis

## Disclaimer

This is an independent learning and portfolio project. It is not affiliated with or derived from any employer's proprietary automation framework.
