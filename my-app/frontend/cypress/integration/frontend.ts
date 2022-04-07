describe('Prime numbers', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', () => {
    cy.contains('Enter multiple integers to calculate the sum and find out if the sum is a prime number');
  });

  it('Single integer form can be filled and result is shown', () => {
    cy.get('#singleInteger').type('123')
    cy.get('#singleSubmit').click()
    cy.contains("Result: Number you entered is not a prime number")
  });

  it('Multiple integer form can be filled and result is shown', () => {
    cy.get('#addValue').type('123')
    cy.get('#addValueButton').click()
    cy.get('#addValue').clear()
    cy.get('#addValue').type('26')
    cy.get('#addValueButton').click()
    cy.get('#multipleSubmit').click()
    cy.contains("Sum: 149")
    cy.contains("Number you entered is a prime number")
  });
});