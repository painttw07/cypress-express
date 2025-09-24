/// <reference types="cypress" />

describe("tasks", () => {
  let testData;

  before(() => {
    cy.fixture("tasks").then((t) => {
      //t = recebe o valor do arquivo
      testData = t;
    });
    cy.viewport(1920, 1080);
  });

  context("creations", () => {
    it("should add a new task", () => {
      const taskName = "Read The crow from Edgar Allan Poe";

      //Para enviar uma requisição http antes do teste iniciar, onde deleta os dados ja criados:
      cy.removeTaskByName(taskName);
      cy.createTask(taskName);
      cy.contains("main div p", taskName).should("be.visible");
    });

    it("shouldn't allow duplicated tasks", () => {
      const taskName = testData.dup.name;

      cy.removeTaskByName(taskName);
      cy.postTask(taskName);
      cy.createTask(taskName);
      cy.get(".swal2-html-container")
        .should("be.visible")
        .should("have.text", "Task already exists!");
    });

    it("should validate required fields", () => {
      cy.createTask();
      cy.verifyRequiredField("This is a required field");
      1;
    });
  });
  context("updates", () => {
    it("should finish a task", () => {
      const taskName = "The Metamorphosis from Franz Kafka";

      cy.removeTaskByName(taskName);
      cy.postTask(taskName);

      cy.visit("/");
      cy.contains("p", taskName)
        .parent()
        .find("button[class*=ItemToggle]")
        .click();

      cy.contains("p", taskName).should(
        "have.css",
        "text-decoration-line",
        "line-through"
      );
    });

    it("should add a new task with a known bug", () => {
      const taskName = "Read Pride and Prejudice from Jane Austen";

      cy.removeTaskByName(taskName);
      cy.createTask(taskName);
      cy.contains("main div p", "BUG-BUG-BUG").should("be.visible");
    });
  });

  context("delete", () => {
    it("should finish a task", () => {
      const taskName = "Read The crow from Edgar Allan Poe";

      cy.removeTaskByName(taskName);
      cy.postTask(taskName);

      cy.visit("/");
      cy.contains("p", taskName)
        .parent()
        .find("button[class*=ItemDelete]")
        .click();

      cy.contains("p", taskName).should("not.exist");
    });
  });
});
