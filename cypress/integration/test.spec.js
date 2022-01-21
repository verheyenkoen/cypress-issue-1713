describe('The language switch', () => {
  it('should be able to switch language v1', () => {
    cy.visit('/nl')

    cy.contains('Nederlands').as('dutch').should('not.be.visible')
    cy.contains('English').as('english').should('not.be.visible')

    cy.contains('Taal').should('be.visible').click()

    cy.location('pathname').should('eq', '/nl')
    cy.location('search').should('eq', '?modal=language')

    cy.get('@dutch').should('be.visible')
    cy.get('@english').should('be.visible')
  })

  it('should be able to switch language v2', () => {
    cy.visit('/nl')

    cy.contains('Nederlands').should('not.be.visible')
    cy.contains('English').should('not.be.visible')

    cy.contains('Taal').should('be.visible').click()

    cy.location('pathname').should('eq', '/nl')
    cy.location('search').should('eq', '?modal=language')

    cy.contains('Nederlands').should('be.visible')
    cy.contains('English').should('be.visible')
  })
})
