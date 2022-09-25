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
    cy.get('h2').contains('Thought for the day:') 
    cy.get('p[id=quoteText]')
    cy.get('p[id=author]')
  })

  it('displays a message if randomized quote is unavailable', () => {
    cy.get('h2').contains('Thought for the day:') 
    // Simulate invalid fetch call
    cy.intercept('GET', 'https://type.fit/api/quotes', {
      statusCode: 401
    })
    .get('p[class=quote-error-message]')
    .should('contain', 'Brighten your day with Uplift.me')
    // Randomized message unavailable check
  })

  it('should have a message input field', () => {
    // Textarea check (add id?)
  })

  it('should have a Clear Entry button', () => {
    // Button check (add id?)
  })

  it('should have an Add Entry button', () => {
    // Button check (add id?)
  })

  it('should have a saved journals area', () => {
    // Container check
  })

  it('should be able to clear a journal entry', () => {
    // Verify message input is empty
    // Add info in message input field
    // Click 'Clear Entry' button
    // Verify message input is empty
  })

  it('should be able to add a journal entry', () => {
    // Verify message input is empty
    // Add info in message input field
    // Click 'Add Entry' button
    // Verify message input is empty
    // Verify journal entry is in saved journals area
  })

})