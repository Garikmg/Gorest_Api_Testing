import { faker } from "@faker-js/faker";

const name = faker.person.fullName()
const email = faker.internet.email()

describe('gorest API Testing', () => {
  beforeEach(() => {
      cy.prepareData(name, email)
  })
  
  it('API tests', function () {
    cy.createUser(this.responseData).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq(name)
      expect(response.body.email).to.eq(email)
    
      const id = response.body.id 

    cy.retrieveUser(this.responseData, id).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(id)
      expect(response.body.name).to.eq(name)
      expect(response.body.email).to.eq(email)
  });

  cy.deleteUser(id).then((response) => {
    expect(response.status).to.eq(204)
  })
  });
  })
})
