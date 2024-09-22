#language: pt

Funcionalidade: Login
Como usuario desejo fazer login
  Cenario: Realizar Login
    Dado que estou na tela de login
    Quando preecher o campo "Usuario" com "Admin"
    E preencher "Password" com "Admin123"
    E clicar no botao laranja escrito login
    Entao devo visualizar o logo "Orange hrm"
