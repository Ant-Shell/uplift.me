describe('Animal view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animals')
  })

  it('displays a header', () => {
     // Logo/branding check
    // View button check
  })

  it('should be able to move to journal view', () => {
    // Verify view button functionality
  })

  // it('should be able to view an animals banner', () => {
    // thinking about conditional render for this page, instead of
    // Thought of the Day / randomized quote
  // })

  it('should show pictures of cute animals', () => {
    // Verify there are 10 animal pics
  })

  it('should display a message if no animal pics render', () => {
    // Simulate invalid fetch call
    // Verify error message
  })
})