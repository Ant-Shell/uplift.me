describe('Journal view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays a header', () => {
    // Logo/branding check
    // View button check
  })

  it('should be able to move to animals view', () => {
    // Verify view button functionality
  })

  it('displays a randomized quote', () => {
    // Thought for the day header check
    // Randomized quote check
  })

  it('displays a message if randomized quote is unavailable', () => {
    // Thought for the day header check
    // Simulate invalid fetch call
    // Randomized message unavailable check - need to build this in
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