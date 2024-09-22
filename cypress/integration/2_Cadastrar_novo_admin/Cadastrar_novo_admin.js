import {Given, When, Then, And, Before} from "cypress-cucumber-preprocessor/steps"

Before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
    cy.get('.oxd-button').click()
})

Given('que estou na tela Admin', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()})

And('clico em "+Add" sou redirecionado a tela "Add User"', ()=>{
    cy.get('.orangehrm-header-container > .oxd-button').click()
})

When('seleciono "User Role" com "Admin"',()=>{
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

})

And('preencho "Employee Name" com "Nome do usuario"',()=> {
    cy.get('.oxd-userdropdown-name').then(($nome)=>{
        const nome_texto = $nome.text()
        const split_name = (nome_usuario) => {
            return nome_usuario.split(' ')[0]
          }
        const primeiro_nome = split_name(nome_texto)
        cy.get('.oxd-autocomplete-text-input > input').type(primeiro_nome)
        cy.get('.oxd-autocomplete-dropdown').should('have.length', 1,).contains(primeiro_nome).should('be.visible').click()
    })
})

And('preencho "Username" com "NewAdmin"',()=>{
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NewAdmin')
})

And('seleciono "Status" com "Enabled"',()=>{
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
})
And('preencho "password" com "newadmin123"',()=>{
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('newadmin123')
})

And('preencho "Confirm password" com "newadmin123"',()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('newadmin123')
})

And('clico em save',()=>{
    cy.get('.oxd-button--secondary').click()
})

Then('vejo a mensagem "Successfully Saved" no canto inferior esquerdo',()=>{
    cy.get('.oxd-text--toast-message').then(($sucesso_elemento)=>{
        const successo_texto = $sucesso_elemento.text()
        expect(successo_texto).to.equal("Successfully Saved")
    })
})