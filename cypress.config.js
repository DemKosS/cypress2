const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '563cyw',

  "retries" : 1,
  "pageLoadTimeout": 60000,     
  "screenshotOnRunFailure" : true ,
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/client/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
