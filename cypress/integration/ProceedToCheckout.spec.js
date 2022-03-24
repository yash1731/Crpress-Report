
/// <reference types="cypress" />

describe('Proceed to Checkout Tests', () =>{

  beforeEach( () => {
      cy.fixture('example').then((user) => {        
      cy.visit(user.url)  

      cy.eyesOpen({
        appName: 'test home page',
        testName: 'login test',
      })
    })   
  })

  it('Add product to cart & sign in before checkout', () => {
      //cy.viewport(1280,720)
      //cy.viewport('ipad-2')     

      // verify product page
      cy.contains('Women').should('exist')
      cy.contains('Women').should('have.text','Women')     
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
      cy.get('.button-medium > span').click() 
      cy.get('.cart_navigation > .button > span').click()

      // verify page url
      cy.url().should('include','order')

      // verify page and links
      cy.contains('Authentication').should('exist')
      cy.contains('Create an account').should('exist')
      cy.contains('Sign in').should('exist')
      cy.get('#SubmitLogin > span').click()

      
            
  })

  it('Verify log in page', () => {

      cy.fixture('example').then((user) => {
      cy.get('.login').click()

      cy.eyesCheckWindow({
        tag: "Login Window",
        target: 'window',
        fully: true
    });

       // verify page and links
       
      cy.url().should('include','my-account')       
      cy.get('#email').type(user.email)
      cy.get('#passwd').type(user.password)
      cy.get('#SubmitLogin > span').click()
      cy.contains('Yashpal DEWANGAN').should('exist')

      cy.eyesCheckWindow({
        tag: "App Window",
        target: 'window',
        fully: true
    });
       

    cy.eyesClose()


      cy.contains('Women').click()
      cy.get('.product_list > :nth-child(1)').click()
      cy.contains('Add to cart').click()
      cy.contains('Proceed to checkout').click()
      cy.get('footer').scrollIntoView({ duration: 1000 })
      cy.get('.cart_navigation > .button > span').click()
      cy.get('footer').scrollIntoView({ duration: 1000 })
      cy.get('.cart_navigation > .button > span').click()
      cy.get('footer').scrollIntoView({ duration: 1000 })
      cy.get('#cgv').click()
      cy.get('.cart_navigation > .button > span').click()  
      
        // verify page url
         
      cy.url().should('include','multi-shipping=') 

       })      
   })   
})