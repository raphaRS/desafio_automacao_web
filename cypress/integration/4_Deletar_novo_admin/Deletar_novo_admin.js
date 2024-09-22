import {Given, When, Then, And, Before, then} from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
    cy.get('.oxd-button').click()
})

Given('que estou na tela Admin',()=>{
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
})

When('busco por "NewAdmin"',()=>{
    cy.get(':nth-child(2) > .oxd-input').type('NewAdmin')
    cy.wait(5000);
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click({force: true})
    })


And('clico no icone da lixeira',()=>{
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ multiple: true })
    
})

And('abre um pop-up na tela',()=>{
    cy.get('.orangehrm-modal-header > .oxd-text').should('be.visible')
})

And('clico em "Yes,Delete"',()=>{
    cy.get('.oxd-button--label-danger').click({force: true})
    
})

Then('vejo a mensagem "Successfully  Delete" no canto inferior esquerdo',()=>{
    cy.get('.oxd-text--toast-message').then(($sucesso_delete)=>{
        const successo_texto = $sucesso_delete.text()
        expect(successo_texto).to.equal("Successfully Deleted")
    })
})