import {Given, When, Then, And, Before} from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
    cy.get('.oxd-button').click()
})

Given('que estou na tela admin', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
});

When('preencho o campo "Username" com "NewAdmin"', () => {
    cy.get(':nth-child(2) > .oxd-input').type('NewAdmin')
})

And('clico em "Search"',()=>{
    cy.wait(2000);
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force: true})
})  

Then('vejo o usuario encontrado', () => {
    cy.wait(2000);
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div')
    .then(($user)=>{
        const valida_usuario = $user.text()
        expect(valida_usuario).to.equal('NewAdmin')
    })
})