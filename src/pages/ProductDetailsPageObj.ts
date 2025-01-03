import { BrowserContext, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { faker } from "@faker-js/faker/locale/fr";
import { returnUser } from "../fixtures/randomizer";

export class ProductDetailsPage {
  readonly page:Page;
  readonly commonPage:CommonPage;
  readonly productNameLocator:Locator;
  readonly productPriceLocator:Locator;
  readonly categoryLocator: Locator;
  readonly availabilityLocator: Locator;
  readonly conditionLocator: Locator;
  readonly brandLocator: Locator;
  readonly viewProduct_btn:Locator;
  readonly name_input:Locator;
  readonly email_input: Locator;
  readonly comment_box: Locator;
  readonly submit_btn: Locator;
  readonly submit_message: Locator;
  readonly quantity: Locator;
  readonly addToCart_btn: Locator;
  readonly viewCart_link: Locator;
  
  constructor(page:Page, context:BrowserContext) {
    this.page = page;
    this.commonPage = new CommonPage(page, context);
    this.productNameLocator = page.locator(`//div[@class="product-information"]/h2`);
    this.productPriceLocator = page.locator(`//div[@class="product-information"]/span/span`);
    this.categoryLocator = page.locator(`//div[@class="product-information"]/p`).first();
    this.availabilityLocator = page.locator(`//div[@class="product-information"]/p/b`).nth(0);
    this.conditionLocator = page.locator(`//div[@class="product-information"]/p/b`).nth(1);
    this.brandLocator = page.locator(`//div[@class="product-information"]/p/b`).nth(2);
    this.name_input = page.locator(`//input[@id="name"]`);
    this.email_input = page.locator(`//input[@id="email"]`);
    this.comment_box = page.locator(`//textarea[@id="review"]`);
    this.submit_btn = page.locator(`//button[@id="button-review"]`);
    this.submit_message = page.locator(`//div[@class="alert-success alert"]/span`);
    this.quantity = page.locator(`//input[@id="quantity"]`);
    this.addToCart_btn = page.locator(`//button[@class="btn btn-default cart"]`);
    this.viewCart_link = page.locator(`//p/a[@href="/view_cart"]`);
  }

  async verifyProductDetailsPage(productNumber:number) {
    await this.commonPage.verifyUrl(`https://www.automationexercise.com/product_details/${productNumber}`);
  }

  async verifyProductName(productName:string) {
    await this.commonPage.verifyTextIsCorrect(this.productNameLocator, productName);
  }

  async verifyProductPrice(productPrice:string) {
    await this.commonPage.verifyTextIsCorrect(this.productPriceLocator, productPrice);
  }

  async verifyCategoryPresence() {
    await this.commonPage.verifyTextContain(this.categoryLocator,"Category");
  }
  
  async verifyAvailabilityPresence() {
    await this.commonPage.verifyTextContain(this.availabilityLocator, "Availability");
  }

  async verifyConditionPresence() {
    await this.commonPage.verifyTextContain(this.conditionLocator, "Condition");
  }

  async verifyBrandPresence() {
    await this.commonPage.verifyTextContain(this.brandLocator, "Brand");
  }

  async fillNameInput() {
    const user = await returnUser();
    await this.name_input.fill(user.name);
  }

  async fillEmailInput() {
    const user = await returnUser();
    await this.email_input.fill(user.email);
  }

  async fillCommentBox() {
    await this.comment_box.fill(faker.lorem.lines(10));
  }

  async clickOnSubmitBtn() {
    await this.submit_btn.click();
  }

  async verifySubmitMessage() {
    await this.commonPage.verifyTextIsCorrect(this.submit_message, "Thank you for your review.");
  }

  async setProductQuantity(requiredQuantity:number) {
    await this.quantity.fill(`${requiredQuantity}`);
    
  }

  async clickOnAddToCart() {
    await this.addToCart_btn.click();
  }

  async clickOnViewCart() {
    await this.viewCart_link.click();
  }


}