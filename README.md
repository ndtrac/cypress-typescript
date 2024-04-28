# Cypress TypeScript Project

This project uses Cypress with TypeScript for end-to-end testing.

## Project Structure

- `cypress`: This directory contains the Cypress tests and related files.
  - `e2e`: This directory contains the end-to-end tests.
  - `fixtures`: This directory is where you can put data files that you want to use in your tests.
  - `support`: This directory is where you can put reusable behavior, such as custom commands or global overrides, that you want to be available in all your tests.
- `node_modules`: This directory contains the project dependencies.
- `cypress.config.ts`: This file contains settings for the Cypress tests.
- `tsconfig.json`: This file is used by TypeScript to determine which files to compile and how to compile them.
- `package.json`: This file is used by npm to manage the project's dependencies.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run the tests using the appropriate command. (Note: The current `npm test` command in the [package.json](package.json) file does not run any tests. You may need to update this command to run your Cypress tests.)

## Custom Commands

This project includes a custom Cypress command `clickByCss` that clicks on an element using a CSS selector. You can use it in your tests like this:

```typescript
cy.clickByCss('.my-css-class');