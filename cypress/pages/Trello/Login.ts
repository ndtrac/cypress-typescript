/// <reference types="cypress" />
import { loginButton, usernameTextbox, passwordTextbox } from "./loginElements";

const loginTrello = (username: string, password: string) => {
  cy.visit("https://trello.com/home");
  cy.clickByCss(loginButton);
  cy.typeByCss(usernameTextbox, username);
  cy.clickButtonByText("Continue");
  cy.typeByCss(passwordTextbox, password);
  cy.clickButtonByText("Log in");

  //   cy.waitForRequest(
  //     "GET",
  //     "https://trello.com/1/resources/templates/categories"
  //   );
  cy.intercept(
    "GET",
    "https://trello.com/1/resources/templates/categories",
    (req) => {
      console.log("Intercepted Request URL:", req.url);
      console.log("Intercepted Request Method:", req.method);
      console.log("Intercepted Request Headers:", req.headers);
      console.log("Intercepted Request Body:", req.body);
      req.reply({ status: 200, body: "Custom Response" });
    }
  );
};

export { loginTrello };
