//encapsulamento
Cypress.Commands.add("createTask", (taskName = "") => {
  cy.visit("/");
  cy.get("#newTask").as("inputNewTask");

  if (taskName !== "") {
    cy.get("@inputNewTask").type(taskName);
  }
  cy.contains("button", "Create").click();
});

Cypress.Commands.add("verifyRequiredField", (targetMessage) => {
  cy.get("@inputNewTask")
    //propriedade que valida a mensagem
    .invoke("prop", "validationMessage")
    .should((text) => {
      expect(targetMessage).to.eq(text);
    });
});

Cypress.Commands.add("removeTaskByName", (taskName) => {
  cy.request({
    url: Cypress.env("apiUrl") + "/helper/tasks",
    method: "DELETE",
    body: { name: taskName },
  }).then((response) => {
    expect(response.status).to.eq(204);
  });
});

Cypress.Commands.add("postTask", (taskName) => {
  cy.request({
    url: Cypress.env("apiUrl") + "/tasks",
    method: "POST",
    body: {
      name: taskName,
      is_done: false,
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
  });
});
