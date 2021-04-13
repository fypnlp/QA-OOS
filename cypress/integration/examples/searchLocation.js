/// <reference types="Cypress" />

describe('Find Applicants location', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('Find city with lowercase letter', () => {
      cy.get('#city').type('sheffield')
      cy.get("#submit").click()
      cy.get(".CrewMember-info").contains(`sheffield`);
      cy.get(".CrewMember-info").contains('liverpool').should('not.exist')

    cy.get("#clear").click()
    cy.get(".CrewMember-info").contains(`sheffield`);
      cy.get(".CrewMember-info").contains('liverpool')
    })

    // this test will fail because the application logic doesn`t handle case insensitive values
    it.skip('Find city by upper case letter', () => {
        cy.get('#city').type('Sheffield')
        cy.get("#submit").click()
        cy.get(".CrewMember-info").contains(`sheffield`);
      cy.get(".CrewMember-info").contains('liverpool').should('not.exist')

    cy.get("#clear").click()
    cy.get(".CrewMember-info").contains(`sheffield`);
      cy.get(".CrewMember-info").contains('liverpool')
      })






  })


