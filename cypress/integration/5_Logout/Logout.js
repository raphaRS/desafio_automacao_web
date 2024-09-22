import {Given, When, Then, And, Before, then} from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
    cy.get('.oxd-button').click()
})

Given(('que estou logado na aplicacao'), ()=>{
    cy.get('.oxd-brand-banner > img').should('be.visible')
})

When('clico em no meu usuario', () => {
    cy.get('.oxd-userdropdown-tab').click()
})
And('clico em logout',() => {
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})
Then('sou redicionado a pagina de login', ()=> {
    cy.get('.oxd-text--h5').then(($login)=>{
        const valida_login = $login.text()
        expect(valida_login).to.equal('Login')
    })
})