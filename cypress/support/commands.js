// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createUser", (payload) => {
    cy.request({
        url: `/users`,
        method: 'POST',
        body: payload,
        headers: { Authorization: Cypress.env("accessToken") }

    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(payload.name)
        expect(response.body.email).to.eq(payload.email)
        cy.wrap(response.body.id).as('id')
    });
})

Cypress.Commands.add("retrieveUser", (payload, id) => {
    cy.request({
        url: `/users/${id}`,
        method: 'GET',
        body: payload,
        headers: { Authorization: Cypress.env("accessToken")}

    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(id)
        expect(response.body.name).to.eq(payload.name)
        expect(response.body.email).to.eq(payload.email)
    });
})

Cypress.Commands.add("deleteUser", (payload, id) => {
    cy.request({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
            "Accept": "application / json",
            "Authorization": Cypress.env("accessToken")}  
        }).then((response) => {
            expect(response.status).to.eq(204)
        })
})



Cypress.Commands.add("prepareData", (name, email) => {
    cy.fixture("data.json").then(data => {
        data.name = name
        data.email = email
      }).as('responseData')
})