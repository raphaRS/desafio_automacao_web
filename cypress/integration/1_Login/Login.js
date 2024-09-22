import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('que estou na tela de login', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.wait(2000)
  cy.get('.orangehrm-login-branding > img').should('be.visible')
});

When('preecher o campo "Usuario" com "Admin"', () => {
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
})

And('preencher "Password" com "Admin123"', () => {
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
})

And('clicar no botao laranja escrito login', () => {
  cy.get('.oxd-button').should('be.visible').click()
})

Then('devo visualizar o logo "Orange hrm"', () => {
  cy.get('.oxd-brand-banner > img').should('be.visible')
})


