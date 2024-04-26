declare var require: any;
import { defineConfig } from "cypress";

export default defineConfig({
  includeShadowDom: true,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "http://google.com",
    animationDistanceThreshold: 5,
    clientCertificates: [],
    defaultCommandTimeout: 20000,
    downloadsFolder: "cypress/downloads",
    env: {
      sit: "sit4",
      buid: "1234",
      pid: "",
      username: "",
      password: "",
    },
    excludeSpecPattern: "*.hot-update.js",
    execTimeout: 60000,
    experimentalModifyObstructiveThirdPartyCode: true,
    fixturesFolder: "cypress/fixtures",
    modifyObstructiveCode: true,
    numTestsKeptInMemory: 10,
    pageLoadTimeout: 60000,
    reporter: "spec",
    requestTimeout: 60000,
    responseTimeout: 60000,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    scrollBehavior: false,
    slowTestThreshold: 10000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    taskTimeout: 60000,
    testIsolation: false,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: false,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    videoUploadOnPasses: false,
    viewportWidth: 1900,
    viewportHeight: 1900,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
  },

  // additional configuration options go here
});
