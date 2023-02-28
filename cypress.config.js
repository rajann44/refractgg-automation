const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  retries: 0,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'report-custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: false,
  },
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      switch(config.env.base_url) {
        case 'qa':
          return {baseUrl: "https://refract.gg/"}
        case 'dev':
          return {baseUrl: "https://refract-2.gg/"}
        default:
          return {baseUrl: "https://refract.gg/"}
      };
    },

  },
});
