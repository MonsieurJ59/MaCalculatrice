const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true, 
    baseURL: 'http://localhost:5500/calculatrice/', 
  },
});
