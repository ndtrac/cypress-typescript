/// <reference types="cypress" />
import { searchInput, searchButton } from "./googleElements";

// export class GooglePage {
//   // Define CSS selectors for elements on the Google page
//   searchInput = '[name="q"]';
//   searchButton = '[name="btnK"]'; // This selector might vary based on Google's HTML structure

//   // Method to perform a search on Google
//   search(query: string) {
//     // Type the query into the search input
//     // cy.get(this.searchInput).clear().type(query);
//     //@ts-ignore
//     cy.typeByCss(this.searchInput, query); // This is an example of using a custom command
//     // Click the search button
//     // cy.get(this.searchButton).click();
//     //@ts-ignore

//     cy.clickByCss(this.searchInput, query); // This is an example of using a custom command
//   }
// }

const searchGoogle = (query: string) => {
  // Define CSS selectors for elements on the Google page
  //   let searchInput = `textarea[id='APjFqb']`; // This selector might vary based on Google's HTML structure`;
  //   let searchButton = `input[name="btnK"]`; // This selector might vary based on Google's HTML structure
  // cy.typeByCss(`textarea[id='APjFqb']`, query);
  cy.typeByCss(searchInput, query);
  //   cy.clickByCss(`input[name="btnK"]`);
};

export { searchGoogle };
