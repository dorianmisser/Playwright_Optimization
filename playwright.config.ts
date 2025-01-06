import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { defineBddConfig} from 'playwright-bdd';

const pathToExtensionChromium = path.join(`C:/Users/Dorian Misser/Documents/Applications/uBlock/uBlockChromium`, 'uBlock');
const pathToExtensionFirefox = "C:/Users/Dorian Misser/Documents/Applications/adblock/adblockplus-firefox-4.10.0-mv2.xpi"; 
const pathToFirefoxDriver = "C:/Users/Dorian Misser/AppData/Local/ms-playwright/firefox-1466/firefox/firefox.exe";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const testDir = defineBddConfig({
  features: `./src/features/*.feature`,
  steps: [`src/steps/**`, `src/fixtures/fixtures.ts`],
});


export default defineConfig({ 
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list"], 
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000,
  use: {
    baseURL:"https://www.automationexercise.com",
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Test sur Chrome',
      testDir,
      use: { ...devices['Desktop Chrome'],
        channel: 'chromium',
        browserName: 'chromium', 
        headless:true,
        deviceScaleFactor: undefined,
        viewport:null,
        launchOptions: {
          args:[
            '--start-maximized',
            `--disable-extensions-except=${pathToExtensionChromium}`,
            `--load-extension=${pathToExtensionChromium}`,
          ]
        }
      },
    },
    

    {
      name: 'Test sur Firefox',
      use: { ...devices['Desktop Firefox'],
        channel: 'firefox',
        browserName: 'firefox', 
        headless:true,
        deviceScaleFactor: undefined,
        viewport:{height:1080, width:1920},
        launchOptions: {
        }
      },
    },

    {
      // name: 'Test sur Edge',
      // use: { ...devices['Microsoft Edge'], 
      //   browserName: 'chromium',
      //   channel: 'msedge',
      //   headless:true,
      //   deviceScaleFactor: undefined,
      //   viewport:null,
      //   launchOptions: {
      //     args:[
      //       '--start-maximized',
      //       `--disable-extensions-except=${pathToExtensionChromium}`,
      //       `--load-extension=${pathToExtensionChromium}`,
      //     ]
      //   }
      // },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

  ],


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
