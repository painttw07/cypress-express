/// <reference types="cypress" />

describe("tasks", () => {
  it("should add a new task:", () => {
    const taskName = "Read 'The crow' from Edgar Allan Poe";

    //Para enviar uma requisição http antes do teste iniciar, onde deleta os dados ja criados:
    cy.removeTaskByName(taskName);
    cy.createTask(taskName);
    cy.contains("main div p", taskName).should("be.visible");
  });

  it("shouldn't allow duplicated tasks:", () => {
    const taskName = "Wuthering Heights from Emily Brontë";

    cy.removeTaskByName(taskName);
    cy.postTask(taskName);
    cy.createTask(taskName);
    cy.get(".swal2-html-container")
      .should("be.visible")
      .should("have.text", "Task already exists!");
  });

  it("should validate required fields:", () => {
    cy.createTask();
    cy.verifyRequiredField("This is a required field");
  });
});
