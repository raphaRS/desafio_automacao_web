#language: pt

Funcionalidade: Buscar por um admin
Como Administrador, desejo buscar por um novo usuario

Cenario: Buscar Admin cadastrado
    Dado que estou na tela admin
    Quando preencho o campo "Username" com "NewAdmin"
    E clico em "Search"
    Entao vejo o usuario encontrado


