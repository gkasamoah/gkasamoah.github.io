//import {cypress} from "cypress" 
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Login').click()
    cy.url().should('contain','Index')
    
  })
})

