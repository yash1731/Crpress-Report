/// <reference types="cypress" />

describe('Summer Dress Tests', () =>{
    beforeEach( () => {
        cy.fixture('example').then((user) => {
        cy.visit(user.url)  
      })   
    })

    it('Verify slected product Test', () => {

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.block_content > .tree > .last > a').click()
        cy.contains('Summer Dresses').should('exist')        
           
    })
})