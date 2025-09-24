describe('Home spec validations', () => {
  it('The web application should be online: ', () => {
    cy.visit('/')

    //cy.title() -> função que obtém a info que exibida no título da aba do navegador
    //.should('', '') -> subfunção que recebe dois argumentos:
    // - 1º: parameter: evento de comparação. 
    // - 2º parameter: the value to be compare.
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')



  })
})