import { BrowserContext, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { faker } from "@faker-js/faker/locale/fr";

export class ContactUsPage {
  readonly page: Page;
  readonly commonPage:CommonPage;
  readonly contactUs_menubtn:Locator;
  readonly name_input:Locator;
  readonly email_input:Locator;
  readonly request_input:Locator;
  readonly message_input:Locator;
  readonly uploadFile_link:Locator;
  readonly submit_btn:Locator;
  readonly submit_message: Locator;
  readonly home_btn: any;


  constructor(page:Page, context:BrowserContext) {
    this.page=page;
    this.commonPage = new CommonPage(page, context);
    this.contactUs_menubtn = page.locator(`//a[@href="/contact_us"]`);
    this.name_input = page.locator(`//input[@name="name"]`);
    this.email_input= page.locator(`//input[@name="email"]`);
    this.request_input= page.locator(`//input[@name="subject"]`);
    this.message_input= page.locator(`//textarea[@name="message"]`);
    this.uploadFile_link=page.locator(`//input[@name="upload_file"]`);
    this.submit_btn=page.locator(`//input[@name="submit"]`);
    this.submit_message = page.locator(`//div[@class="status alert alert-success"]`);
    this.home_btn = page.locator(`//div[@id="form-section"]/a`);


  }
    async verifyPresenceOnContactUsPage() {
      await this.commonPage.verifyActivePage(this.contactUs_menubtn);
    }

    async fillNameInput() {
      await this.name_input.fill("dodo");
    }

    async fillEmailInput() {
      await this.email_input.fill("dodo@yopmail.com");
    }

    async fillRequestInput() {
      await this.request_input.fill("Info Request");
    }

    async fillMessageInput() {
      await this.message_input.fill(faker.lorem.lines(10));
    }

    async uploadFile() {
      await this.uploadFile_link.setInputFiles('src/data/randomFile.txt');
    }

    async clickOnSubmit() {
      await this.submit_btn.click();
    }

    async verifyMessageOnSubmit() {
      await this.commonPage.verifyTextIsCorrect(this.submit_message,`Success! Your details have been submitted successfully.`);
    }

      async clickOnHomeBtn() {
      await this.home_btn.click();
    }

}


