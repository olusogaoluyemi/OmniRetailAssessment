const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  failOnStatusCode: false,
  e2e: {
    chromeWebSecurity: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 180000,
    pageLoadTimeout: 180000,
    responseTimeout: 90000,
    requestTimeout: 90000,
    setupNodeEvents(on, config) {  
      // implement node event listeners here
    },
    baseUrl: "https://mplify-stage-dev.surge.sh/#/",
    failOnStatusCode: false,
  },
});

