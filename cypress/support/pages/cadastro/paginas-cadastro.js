const el = require('./elements'). ELEMENTS;

class Cadastro {
    
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('input[data-test="email"]').type('l2lll@lll.com');
        cy.get('input[data-test="fullName"]').type('L2lll Lllll');
        cy.get('input[data-test="registerUserName"]').type('2llllllll');
        cy.get('input[data-test="registerPassword"]').type('Ll2llLllll');
    }

    submenterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
        
    }

}

export default new Cadastro();

