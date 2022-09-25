describe('Animal view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animals')
  })

  it('displays a header', () => {
    cy.get('h1').contains('Uplift.me')
    cy.get('button[id=viewChangeButton]')
  })

  it('should be able to move to journal view', () => {
    cy.get('button[id=viewChangeButton]')
    .click()
    cy.url().should('include', '/')
    cy.get('button[id=viewChangeButton]')
    .click()
  })

  // it('should be able to view an animals banner', () => {
    // thinking about conditional render for this page, instead of
    // Thought of the Day / randomized quote
  // })

  it('should show pictures of cute animals', () => {
    cy.get('div[class=animals-container]')
    .find('div[class=dog-card]')
    .should('have.length', 10)
  })

  it('should display a message if no animal pics render', () => {
    cy.intercept('GET', 'https://shibe.online/api/shibes?count=10', {
      statusCode: 401
    })
    .get('p[class=animal-error-message]')
    .should('contain', 'No animals found at this time :(')
  })
})