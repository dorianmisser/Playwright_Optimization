import { BrowserContext, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { returnFileContent } from "../fixtures/randomizer";
export class HomePage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly commonPage : CommonPage;
  readonly homePage_url: string;
  readonly signupLogin_menubtn:Locator;
  readonly products_menubtn: Locator;
  readonly logout_menubtn: Locator;
  readonly cart_menubtn: Locator;
  readonly signUp_btn: Locator;
  readonly page_title: Locator;
  readonly contactUs_menubtn: Locator;
  readonly logged_btn:Locator;
  readonly deleteAccount_menubtn:Locator;
  readonly deleteAccount_message: Locator;
  readonly home_menubtn: Locator;
  readonly continue_btn: Locator;
  readonly subscription_text: Locator;
  readonly scrollToHeader_btn: Locator;
  readonly carousel_titleElement: Locator;

  constructor(page:Page, context:BrowserContext) {
    this.page = page;
    this.commonPage = new CommonPage(page, context);
    this.homePage_url = `https://www.automationexercise.com`
    this.signupLogin_menubtn = page.locator(`//a[@href='/login']`);
    this.products_menubtn = page.locator(`//a[@href='/products']`);
    this.logout_menubtn = page.locator(`//a[@href='/logout']`);
    this.cart_menubtn = page.locator(`//li/a[@href='/view_cart']`);
    this.page_title = page.locator(`//h2[@class="title text-center"]`);
    this.contactUs_menubtn = page.locator(`//a[@href="/contact_us"]`);
    this.logged_btn = page.locator(`//ul[@class='nav navbar-nav']/li[contains(.,'Logged')]`);
    this.deleteAccount_menubtn = page.locator(`//ul[@class='nav navbar-nav']/li/a[@href='/delete_account']`);
    this.deleteAccount_message = page.locator(`//h2[@class="title text-center"]/b`);
    this.home_menubtn = page.locator(`//a[@style="color: orange;"]`);
    this.continue_btn = page.locator(`//a[@data-qa="continue-button"]`);
    this.subscription_text = page.locator(`//footer//h2`);
    this.scrollToHeader_btn = page.locator(`//a[@id="scrollUp"]`);
    this.carousel_titleElement = page.locator(`//div[@id="slider-carousel"]//h2`);
  }

  async navigateToHomepage() {
    await this.commonPage.navigateToUrl("")
  }

  async verifyPresenceOnHomepage() {
    await this.commonPage.elementIsVisible(this.home_menubtn);
  } 

  async clickOnSignupSigninBtn() {
    await this.signupLogin_menubtn.click();
  }

  async clickOnProductsBtn() {
    await this.products_menubtn.click();
    await this.commonPage.verifyTextContain(this.page_title, `All Products`);
  }

  async clickOnCartBtn() {
    await this.cart_menubtn.click();
  }

  async clickOnLogoutBtn() {
    await this.logout_menubtn.click();
  }

  async verifyDeconnect() {
    await this.commonPage.elementIsNotVisible(this.logout_menubtn);
  }

  async clickOnContactUsBtn() {
    await this.contactUs_menubtn.click();
    await this.commonPage.verifyTextContain(this.page_title.first(),`Contact Us`);
  }

  async verifyAccountConnexion(dataSet:string) {
    const user = await returnFileContent(`${dataSet}.json`);
    await this.commonPage.elementIsVisible(this.logged_btn);
    await this.commonPage.verifyTextIsCorrect(this.logged_btn, `Logged in as ${user.name}`);
  }

  async clickOnDeleteAccount() {
    await this.deleteAccount_menubtn.click();
  }

  async verifyDeleteAccountMessage(expectedMessage:string) {
    await this.commonPage.verifyTextIsCorrect(this.deleteAccount_message, expectedMessage)
  }

  async getPageTitle() {
    const pageTitle = await this.page_title.allInnerTexts()
    return pageTitle
  }

  async clickOnContinuebtn() {
    await this.continue_btn.click();
  }

  async verifyPresenceOnTheTopPage(text: string) {
    await this.commonPage.verifyTextIsCorrect(this.carousel_titleElement.first(), text)
  }

  async verifyPresenceOnTheBottomPage(text: string) {
    await this.commonPage.verifyTextIsCorrect(this.subscription_text, text)
  }
}
