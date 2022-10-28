export class SearchPage {

    searchBox = 'input[type="Search"]'
    searchInWidget = '.mw-advancedSearch-namespacesPreview'
    advancedSearchWidget = '.mw-advancedSearch-searchPreview'
    oneOfTheeseWordsTextBox = '#ooui-45'
    allCheckbox = ':nth-child(4) > .oo-ui-inputWidget > .oo-ui-inputWidget-input'
    searchButton = '.oo-ui-actionFieldLayout-button'

    enterTextForSearch(text) {
        cy.get(this.searchBox).eq(0).type(text)
    }

    chooseSearchInAll() {
        cy.get(this.searchInWidget).click()
        cy.get(this.allCheckbox).click()
    }
    chooseAdvancedSearch() {
        cy.get(this.advancedSearchWidget).click()
    }

    fillOneOfTheeseWordsTextBox(text) {
        cy.get(this.oneOfTheeseWordsTextBox).type(text)
    }

    clickSearch() {
        cy.get(this.searchButton).click();
    }
}