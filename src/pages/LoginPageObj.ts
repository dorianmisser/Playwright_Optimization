import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { returnUser } from "../fixtures/randomizer";


export class LoginPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly commonPage:CommonPage;
  readonly googleAdsElements:Locator;
  readonly signUpName_field:Locator;
  readonly signUpEmail_field:Locator;
  readonly signUp_btn:Locator;
  readonly signInEmail_field:Locator;
  readonly signInPassword_field:Locator;
  readonly signIn_btn:Locator;
  readonly login_form:Locator;
  readonly signInincorrectMailPasswordErrorMessage:Locator;
  readonly login_menubtn:Locator;
  readonly signUp_incorrectMailPasswordErrorMessage:Locator;
  
  constructor(page:Page, context:BrowserContext) {
    this.page = page;
    this.commonPage = new CommonPage(page, context);
    this.googleAdsElements = page.locator(`//div[@class='signup-form']//div[contains(@class,'google')]`);
    this.login_form = page.locator(`//div[@class='login-form']`);
    // Signup Form
    this.signUpName_field = page.locator("//input[@data-qa='signup-name']");
    this.signUpEmail_field = page.locator("//input[@data-qa='signup-email']");
    this.signUp_btn = page.getByRole('button', { name: 'Signup' });
    this.signUp_incorrectMailPasswordErrorMessage = page.locator(`//form[@action="/signup"]/p`);
    // Signin Form
    this.signInEmail_field = page.locator(`//input[@data-qa="login-email"]`);
    this.signInPassword_field = page.locator(`//input[@data-qa="login-password"]`);
    this.signIn_btn = page.getByRole('button', { name: 'Login' });
    this.signInincorrectMailPasswordErrorMessage = page.locator("//form[@action='/login']/p");
    this.login_menubtn = page.locator(`//ul[contains(@class,"navbar")]//a[@href="/login"]`);
  }

  async navigateToLoginPage() {
    await this.page.goto(`https://automationexercise.com/login`);
  }

  async verifyPresenceOnLoginPage() {
    await this.commonPage.verifyActivePage(this.login_menubtn);
  }

  async deleteGoogleAds() {
    await this.commonPage.waitForTiming(2000);
    await this.commonPage.deleteElement(this.googleAdsElements);
  }

  async fillNameSignUp() {
    const user = await returnUser();
    await this.signUpName_field.fill(user.name);
  }

  async fillEmailSignUp() {
    const user = await returnUser();
    await this.signUpEmail_field.fill(user.email);
  }

  async clickOnSignupBtn() {
    await this.signUp_btn.click();
  }

  async fillEmailSignIn() {
    const user = await returnUser()
    await this.signInEmail_field.fill(`${user.email}`);
  }

  async fillPasswordSignIn() {
    const user = await returnUser()
    await this.signInPassword_field.fill(`${user.password}`);
  }

  async fillRandomEmailSignIn() {
    const user = await returnUser();
    await this.signInEmail_field.fill(user.email);
  }

  async fillRandomPasswordSignIn() {
    const user = await returnUser();
    await this.signInPassword_field.fill(user.password);
  }

  async fillKOEmailSignIn() {
    const user = await returnUser();
    await this.signInEmail_field.fill(`${user.email}KO`);
  }

  async fillKOPasswordSignIn() {
    const user = await returnUser();
    await this.signInPassword_field.fill(`${user.password}`);
  }

  async clickOnLoginBtn() {
    await this.signIn_btn.click();
  }

  async verifySignInErrorMessage(msgExpected:string) {
    await expect(this.signInincorrectMailPasswordErrorMessage).toHaveText(msgExpected);
  }

  async verifySignUpErrorMessage(msgExpected:string) {
    await expect(this.signUp_incorrectMailPasswordErrorMessage).toHaveText(msgExpected)
  }
}