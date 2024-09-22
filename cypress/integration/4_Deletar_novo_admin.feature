#language: pt

Funcionalidade: Deletar novo usuario
Como Administrador, desejo deletar um novo usuario cadastrado

Cenario: Deletar novo usuario
    Dado que estou na tela Admin
    Quando busco por "NewAdmin"
    E clico no icone da lixeira
    E abre um pop-up na tela
    E clico em "Yes,Delete"
    Entao vejo a mensagem "Successfully  Delete" no canto inferior esquerdo

