const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config) {
  
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //specPattern:"cypress/Integration/*/*.js"
    specPattern:"cypress/UAT/Features/*.feature"
    
  },
  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
});
