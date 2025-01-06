import { test as base, createBdd } from 'playwright-bdd';
import { APIRequestContext, BrowserContext, devices, BrowserType, chromium, Page, request, firefox, webkit } from '@playwright/test';
import { HomePage } from '../pages/HomePageObj';
import { LoginPage } from '../pages/LoginPageObj';
import { UserCreationPage } from '../pages/UserCreationPageObj';
import { ProductPage } from '../pages/ProductPageObj';
import { ProductDetailsPage } from '../pages/ProductDetailsPageObj';
import { CartPage } from '../pages/CartPageObj';
import { CommonPage } from '../pages/CommonPageObj';
import { ContactUsPage } from '../pages/ContactUsPageObj';
import { readFileSync } from 'fs';
import { CheckOutPage } from '../pages/CheckOutPageObj';
import { PaymentPage } from '../pages/PaymentPageObj';
import { ApiUtils } from '../pages/ApiUtils';

export const test = base.extend<{
  browserType: BrowserType;
  context:BrowserContext;
  apiContext:APIRequestContext;
  page: Page;
  extensionId: string;
  commonPage: CommonPage;
  homePage:HomePage;
  userCreationPage:UserCreationPage;
  loginPage:LoginPage;
  productPage:ProductPage;
  productDetailsPage:ProductDetailsPage;
  cartPage:CartPage;
  contactUsPage:ContactUsPage;
  checkoutPage:CheckOutPage;
  paymentPage:PaymentPage;
  apiUtils:ApiUtils;

    }>({

  context: async ({browserName}, use) => {
    const cookies = JSON.parse(readFileSync(`C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data/cookies.ts`, "utf-8"));
    try {
    if (browserName === 'chromium') {
      const context = await chromium.launchPersistentContext("");
      context.addCookies(cookies);
      await use(context);
    }

    else if (browserName === 'firefox') {
      const context = await firefox.launchPersistentContext("");
      context.addCookies(cookies);
      await use(context);
    }

  } catch (error) {
    throw new Error(`Erreur lors du lancement du browser ${browserName} : ${error.message}`);
  }
    },
    
  page: async({context}, use) => {
    try {
    const page = await context.newPage();
    
    await use(page);
    } catch (error) {
      throw new Error(`Erreur lors de l'initialisation de la page : ${error.message}`);
    }
  },
  apiContext: async({}, use) => {
    const apiContext = await request.newContext();
    await use(apiContext);
    },
    commonPage: async ({page, context}, use) => {
        await use(new CommonPage(page, context))
    },
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context))
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context))
    },
    userCreationPage: async ({ page, context }, use) => {
        await use(new UserCreationPage(page, context))
    },
    productPage: async ({ page, context }, use) => {
      await use(new ProductPage(page, context));
    },
    productDetailsPage: async ({ page, context }, use) => {
        await use(new ProductDetailsPage(page, context))
    },
    cartPage: async ({ page, context }, use) => {
        await use(new CartPage(page, context))
    },
    contactUsPage: async ({ page, context }, use) => {
        await use(new ContactUsPage(page, context))
    },
    checkoutPage: async({page, context}, use) => {
      await use(new CheckOutPage(page, context))
    },
    paymentPage: async({page, context}, use) => {
      await use(new PaymentPage(page, context))
    },
    apiUtils: async({apiContext}, use) => {
      await use(new ApiUtils(apiContext))
    }
});
export const expect = test.expect;
export const { Given, When, Then } = createBdd(test);