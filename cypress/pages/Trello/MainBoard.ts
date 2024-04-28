/// <reference types="cypress" />
import * as mainBoardElements from "./mainBoardElements";

const verifyHeader = () => {
  cy.get(mainBoardElements.headerContainer).should("be.visible");
  cy.get(mainBoardElements.applicationSwitcherIconElement).should("be.visible");
};

const createANewBoard = () => {
  cy.clickByCss(mainBoardElements.addIcon);
  cy.clickByCss(mainBoardElements.createBoard);
  cy.typeByCss(mainBoardElements.boardTitleInput, "New Board");
  cy.clickButtonByText("Create");
};
export { verifyHeader, createANewBoard };
