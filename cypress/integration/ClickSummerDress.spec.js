/// <reference types="cypress" />

describe('Basic Desktop Tests', () =>{
    beforeEach( () => {
        cy.fixture('example').then((user) => {
        cy.visit(user.url)  
      })   
    })

    it('Click Summer Dress Test', () => {

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.block_content > .tree > .last > a').click()
        cy.contains('Summer Dresses').should('exist')
        
           
    })
})