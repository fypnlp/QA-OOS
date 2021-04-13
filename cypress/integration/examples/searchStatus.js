// <reference types="Cypress" />

describe('Find Applicants location', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('Find city with lowercase letter', () => {
      cy.get(`.CrewMember-container[data-cy="6fc9d2bb-590c-4351-b0b9-45686e61a4ed"] .CrewMember-up`).click()
      cy.get(`.CrewMember-container[data-cy="6fc9d2bb-590c-4351-b0b9-45686e61a4ed"] .CrewMember-down`).click()
    })

    


  })