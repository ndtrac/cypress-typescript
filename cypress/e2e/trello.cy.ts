import { verifyHeader, createANewBoard } from "../pages/Trello/MainBoard";
import { loginTrello } from "../pages/Trello/Login";

describe("Trello", () => {
  beforeEach(() => {
    // Login before each test
    // cy.loginWithSession("autocypresskdc@gmail.com", "kdchq2024");
    cy.fixture("loginData.json").then((loginData) => {
      cy.loginWithSession(loginData.email, loginData.password);
    });
  });

  it("Create a new board", () => {
    verifyHeader();
    createANewBoard();
  });
});
