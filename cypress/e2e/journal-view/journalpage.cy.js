describe('Journal view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays a header', () => {
    cy.get('h1').contains('Uplift.me')
    cy.get('button[id=viewChangeButton]')
  })

  it('should be able to move to animals view', () => {
    cy.get('button[id=viewChangeButton]')
    .click()
    cy.url().should('include', 'animals')
    .get('img')
    cy.get('button[id=viewChangeButton]')
    .click()
  })

  it('displays a quote', () => {
    cy.get('h2').contains('Thought for the Day:') 
    cy.get('p[id=quoteText]')
    cy.get('p[id=author]')
  })

  it('displays a message if randomized quote is unavailable', () => {
    cy.get('h2').contains('Thought for the day:') 
    cy.intercept('GET', 'https://type.fit/api/quotes', {
      statusCode: 401
    })
    .get('p[class=quote-error-message]')
    .should('contain', 'Brighten your day with Uplift.me')
  })

  it('should have a message input field', () => {
    cy.get('textarea[type=text]')
  })

  it('should have a Clear Entry button', () => {
    cy.get('button[id=clear]')
  })

  it('should have an Add Entry button', () => {
    cy.get('button[id=submit]')
  })

  it('should have a saved journals area', () => {
    cy.get('div[class=journallist-container]')
  })

  it('should be able to clear a journal entry', () => {
    cy.get('textarea[type=text]').should('contain', '')
    cy.get('textarea[type=text]').type('Hello', { force: true })
    cy.get('button[id=clear]').click()
    cy.get('textarea[type=text]').should('contain', '')
  })

  it('should be able to add a journal entry', () => {
    cy.get('textarea[type=text]').should('contain', '')
    cy.get('textarea[type=text]').type('Hello', { force: true })
    cy.get('button[id=submit]').click()
    cy.get('textarea[type=text]').should('contain', '')
    cy.get('div[class=card]').should('contain', 'Hello')
  })

})