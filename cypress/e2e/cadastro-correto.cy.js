import Cadastro from '../support/pages/cadastro/paginas-cadastro'

describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
})
  
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    //cy.contains('[data-test="register"]').click();
    //cy.get('[data-test="email"]').type('pedrot@email.com.br')
    //cy.get('[data-test="fullName"]').type('Pedro Tomasini')
    //cy.get('[data-test="registerUserName"]').type('pedrotomasini')
    //cy.get('[data-test="registerPassword"]').type('pedro1234')
    //cy.contains('button','Register').click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();

  })
})