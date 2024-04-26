import { searchGoogle } from "../pages/Google/Google";

describe("Google search", () => {
  //   const googlePage = new searchGoogle();

  it("should perform a search", () => {
    // Visit the Google page
    cy.visit("https://www.google.com");

    // Perform a search
    searchGoogle("Cypress testing");
    // cy.typeByCss(`textarea[id='APjFqb']`, `Cypress testing`);
    // cy.clickByCss(`input[name="btnK"]`);

    // Assertions can be added here to verify the search results, etc.
  });
});
