/// <reference types="Cypress" />

describe('Find Applicants Names', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('Find by First Name', () => {
      cy.get('#name').type('emma')
      cy.get("#submit").click();
      cy.get(".CrewMember-info").contains(`emma`);
      cy.get(".CrewMember-info").contains('julia').should('not.exist')

    cy.get("#clear").click()
    cy.get(".CrewMember-info").contains(`emma`);
      cy.get(".CrewMember-info").contains('julia')

    })

    it('Find by Surname', () => {
      cy.get('#name').type('moore')
      cy.get("#submit").click()
      cy.get(".CrewMember-info").contains(`moore`);
      cy.get(".CrewMember-info").contains('ruiz').should('not.exist')

      cy.get("#clear").click()
      cy.get(".CrewMember-info").contains(`moore`);
      cy.get(".CrewMember-info").contains('ruiz')
      
      
      })






  })


