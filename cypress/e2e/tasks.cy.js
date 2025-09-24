/// <reference types="cypress" />

describe("Tasks", () => {
  it("Should add a new task:", () => {
    
    //Para enviar uma requisição http antes do teste iniciar, onde deleta os dados ja criados:
    cy.request({
      url: "http://localhost:3333/helper/tasks",
      method: "DELETE",
      body: { name: "Read a js book" },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });

    cy.visit("http://localhost:3000");

    cy.get("#newTask").type("Read a js book");

    cy.contains("button", "Create").click();
  });
});
