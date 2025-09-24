//encapsulamento
Cypress.Commands.add("createTask", (taskName = "") => {
    cy.visit("http://localhost:3000");
    cy.get("#newTask").as("inputNewTask");

    if (taskName !== "") {
        cy.get("@inputNewTask").type(taskName);
    }
    cy.contains("button", "Create").click();
});

Cypress.Commands.add("verifyRequiredField", (targetMessage) => {
    cy.get("@inputNewTask")
        .invoke("prop", "validationMessage")
        .should((text) => {
            expect(targetMessage).to.eq(text);
        });
});

Cypress.Commands.add("removeTaskByName", (taskName) => {
    cy.request({
        url: "http://localhost:3333/helper/tasks",
        method: "DELETE",
        body: { name: taskName },
    }).then((response) => {
        expect(response.status).to.eq(204);
    });
});

Cypress.Commands.add("postTask", (taskName) => {
    cy.request({
        url: "http://localhost:3333/tasks",
        method: "POST",
        body: {
            name: taskName,
            is_done: false,
        },
    }).then((response) => {
        expect(response.status).to.eq(201);
    });
});
