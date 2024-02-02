import { faker } from "@faker-js/faker";

const name = faker.person.fullName()
const email = faker.internet.email()

describe('gorest API Testing', () => {
  beforeEach(() => {
      cy.prepareData(name, email)
  })
  
  it('Create user', function () {
    cy.createUser(this.responseData)
  })

  it('Retrieve user', function () {
    cy.log(this.responseData)
    cy.retrieveUser(this.responseData, this.id)
  })

  it('Delete user', function () {
    cy.deleteUser(this.responseData, this.id)
  })
})
