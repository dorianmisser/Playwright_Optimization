import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const extensionPath = `C:/Users/Dorian Misser/Documents/Applications/uBlock`
const options: LaunchOptions = {
    headless: false,
    args: [
          `--start-maximized`,
          `--disable-extensions-except=${extensionPath}`,
          `--load-extension=${extensionPath}`,
        ]
}

export const invokeBrowser = () => {
    const browser = chromium.launchPersistentContext("",options);
    return browser; 
}
