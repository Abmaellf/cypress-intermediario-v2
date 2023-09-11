describe('Login', () => {

  beforeEach(()=> {
    cy.visit('http://localhost/users/sign_in')
    
})
  it('successfully', () => {
    cy.login()

   cy.get('.qa-user-avatar').should('be.visible')

  })
})