describe('Página de login', () => {

  beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

      cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
        statusCode: 400
      }).as('stubPost')
  })

    it('Verificar mensagen de campos obrigatórios na página de login', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

      it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('pedrotomasini1', 'pedro12345');
        cy.wait('@stubPost')
      

    })
  })