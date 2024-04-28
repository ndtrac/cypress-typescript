/// <reference types="cypress" />
import { getByTestId } from "@testing-library/cypress/add-commands";
import { timeouts } from "./timeouts";
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      clickByCss(selector: string): Chainable<void>;
      typeByCss(selector: string, value: string): Chainable<void>;
      clickButtonByText(text: string): Chainable<void>;
      waitForRequest(method: string, url: string): Chainable<Element>;
      loginWithSession(name: string, password: string): Chainable<void>;
    }
  }
}
Cypress.Commands.add("clickByCss", (selector: string) => {
  cy.get(selector).click();
});

Cypress.Commands.add("typeByCss", (selector: string, value: string) => {
  cy.get(selector).type(value);
});

Cypress.Commands.add("clickButtonByText", (text) => {
  cy.contains("button", text).click();
});

Cypress.Commands.add("waitForRequest", (method, url) => {
  cy.intercept(method, url).as("interceptedRequest");
  cy.wait("@interceptedRequest");
});

Cypress.Commands.add("loginWithSession", (name, password) => {
  cy.session(
    [name, password],
    () => {
      // Perform the login process
      cy.visit("https://trello.com/login");
      cy.get(`input[data-testid='username']`).type(name);
      cy.get(`button[id='login-submit']`).click();
      cy.get("input[id='password']").type(password);
      cy.get(`button[id='login-submit']`).click();
      cy.wait(5 * 1000);
      // Validate login by visiting a protected URL
      cy.visit("https://trello.com/templates");
    },
    {
      validate() {
        // Perform additional validation if needed
        // For example, check if the user is redirected to a dashboard after login
        cy.visit("https://trello.com/templates");
      },
    }
  );
});
