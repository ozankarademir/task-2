/// <reference types="cypress"/>
import { SearchPage } from "./pages/search_page"
const searchPage = new SearchPage

beforeEach(function () {
    cy.visit('https://en.wikipedia.org/w/index.php?search')
})

describe('Home Task - Wikipedia Search', () => {

    it('Search in with all', () => {
        searchPage.chooseSearchInAll()
        searchPage.enterTextForSearch("test")
        searchPage.clickSearch()
        cy.get('b').should('contain', 'Test')
    })

    it('Advanced Search with one of theese words', () => {
        searchPage.chooseAdvancedSearch()
        searchPage.fillOneOfTheeseWordsTextBox("Test{enter}")
        searchPage.fillOneOfTheeseWordsTextBox("automation{enter}")
        searchPage.clickSearch()
        cy.get('.mw-search-results-container').find("ul li").eq(0).should('contain', 'Test automation')
    })
})