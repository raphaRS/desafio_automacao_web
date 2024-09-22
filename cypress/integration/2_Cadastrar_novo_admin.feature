#language: pt

Funcionalidade: Cadastrar novo usuario
Como Administrador, desejo cadastrar um novo usuario

Cenario: Cadastrar novo usuario
    Dado que estou na tela Admin
    E clico em "+Add" sou redirecionado a tela "Add User"
    Quando seleciono "User Role" com "Admin"
    E preencho "Employee Name" com "Nome do usuario"
    E preencho "Username" com "NewAdmin"
    E seleciono "Status" com "Enabled"
    E preencho "password" com "newadmin123"
    E preencho "Confirm password" com "newadmin123"
    E clico em save
    Entao vejo a mensagem "Successfully Saved" no canto inferior esquerdo

