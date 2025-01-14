let ag_grid_utils = require("ag-grid-testing");

describe('javascript-grid/example-js.spec.js', function () {
    // not an angular application
    browser.ignoreSynchronization = true;

    beforeEach(() => {
        browser.get(browser.baseUrl + "/javascript-grid/example-js.html");
    });

    it('should have expected column headers', () => {
        ag_grid_utils.allElementsTextMatch(by.css(".ag-header-cell-text"), ['Make', 'Model', 'Price']);
    });

    it('should have expected grid data', () => {
        ag_grid_utils.verifyRowDataMatchesGridData(
            [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxster", price: 72000}
            ]);
    });
});