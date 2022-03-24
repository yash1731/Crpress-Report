/// <reference types="cypress" />

describe('home page test', () =>{
    it('login page test', () =>{
      cy.visit('https://www.channel5.com/')

      //cy.pause()

      cy.contains('Continue').click()   
      cy.get('.CookieBanner_controls__A3b7b > .button', { timeout: 5000})
      cy.get('.CookieBanner_controls__A3b7b > .button').click()
      cy.get('[data-testid="iconContainer"] > .link').click()
      cy.debug()
      // assertion 
      cy.url().should('include','.com')
      cy.get('#email').type('techtest123@gmail.com').should('have.value','techtest123@gmail.com')
      cy.screenshot()
    })
})