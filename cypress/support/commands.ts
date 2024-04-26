/// <reference types="cypress" />
import { timeouts } from "./timeouts";
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      clickByCss(selector: string): Chainable<void>;
      typeByCss(selector: string, value: string): Chainable<void>;
    }
  }
}
Cypress.Commands.add("clickByCss", (selector: string) => {
  cy.get(selector).click();
});

Cypress.Commands.add("typeByCss", (selector: string, value: string) => {
  cy.get(selector).type(value);
});
