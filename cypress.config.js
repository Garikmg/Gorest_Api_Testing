const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://gorest.co.in/public/v2',
    env: {
      accessToken: 'Bearer 23597e7913e67ee6cf141e20cd7a3b28d315b913f84904b46762f7c51781b9f1	'
   },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
