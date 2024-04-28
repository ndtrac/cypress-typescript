import { verifyHeader, createANewBoard } from "../pages/Trello/MainBoard";
import { loginTrello } from "../pages/Trello/Login";

describe("Trello", () => {
  beforeEach(() => {
    // Login before each test
    cy.loginWithSession("autocypresskdc@gmail.com", "kdchq2024");
  });

  it("Create a new board", () => {
    // Visit the Google page
    // loginTrello("autocypresskdc@gmail.com", "kdchq2024");
    verifyHeader();
    createANewBoard();
  });
});
