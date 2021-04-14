// <reference types="Cypress" />

describe('Applicants Status', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('Move Applicants Status', () => {
      cy.get(`.CrewMember-container[data-cy="6fc9d2bb-590c-4351-b0b9-45686e61a4ed"] .CrewMember-up`).click()
      cy.get(`.CrewMember-container[data-cy="6fc9d2bb-590c-4351-b0b9-45686e61a4ed"] .CrewMember-down`).click()
    })

    


  })
