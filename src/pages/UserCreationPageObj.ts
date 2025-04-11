import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { returnUser } from "../fixtures/randomizer";

export class UserCreationPage {
  readonly page:Page;
  readonly commonPage:CommonPage;
  readonly viewCart_btn:Locator;
  readonly titleMr_checkbox:Locator;
  readonly titleMrs_checkbox: Locator;
  readonly item2Name : Locator;
  readonly name_input: Locator;
  readonly email_input: Locator;
  readonly password_input: Locator;
  readonly dayOfBirth_dropdown: Locator;
  readonly monthOfBirth_dropdown: Locator;
  readonly yearOfBirth_dropdown: Locator;
  readonly firstName_input: Locator;
  readonly lastName_input: Locator;
  readonly address_input: Locator;
  readonly address2_input: Locator;
  readonly country_dropdown: Locator;
  readonly state_input: Locator;
  readonly city_input: Locator;
  readonly zipCode_input: Locator;
  readonly mobileNumber_input: Locator;
  readonly createAccount_btn: Locator;
  readonly newsletter_checkbox: Locator;
  readonly specialOffer_checkbox: Locator;
  readonly accountCreated_Message: Locator;
  readonly continue_btn: Locator;
  readonly page_title: Locator;
  readonly company_input: Locator;

  constructor(page:Page, context: BrowserContext) {
    this.page = page;
    this.commonPage = new CommonPage(page, context);
    this.page_title = page.locator(`//div/h2[@class="title text-center"]/b`);
    this.viewCart_btn = page.locator(`//li/a[@href='/view_cart']`);
    // locators du formulaire
    // Selection du titre
    this.titleMr_checkbox = page.getByLabel('Mr.');
    this.titleMrs_checkbox = page.getByLabel('Mrs.');

    // Champs pré-remplis "Name" et "Password"
    this.name_input = page.locator(`//input[@id='name']`);
    this.email_input = page.locator(`//input[@id='email']`);

    // Suite formulaire
    this.password_input = page.getByLabel('Password *');
    this.dayOfBirth_dropdown = page.locator("#days");
    this.monthOfBirth_dropdown = page.locator("#months");
    this.yearOfBirth_dropdown = page.locator("#years");

    this.newsletter_checkbox = page.getByRole("checkbox",{name:"newsletter"});
    this.specialOffer_checkbox = page.getByRole("checkbox", {name: "optin"});

    this.firstName_input = page.locator("#first_name");
    this.lastName_input = page.locator("#last_name");
    this.company_input = page.locator("#company");
    this.address_input = page.locator("#address1");
    this.address2_input = page.locator("#address2");
    this.country_dropdown = page.locator("#country");
    this.state_input = page.locator("#state");
    this.city_input = page.locator("#city");
    this.zipCode_input = page.locator("#zipcode");
    this.mobileNumber_input = page.locator("#mobile_number");
    this.createAccount_btn = page.locator("//button[@data-qa='create-account']");

    this.accountCreated_Message = page.locator("xpath=//h2[@data-qa='account-created']");
    this.continue_btn = page.locator(`//a[@data-qa='continue-button']`);
    
  }
  async verifyPresenceOnUserCreationPage() {
    await this.commonPage.verifyTextIsCorrect(this.page_title, "Enter Account Information");
  }
  async verifyNameAndEmail() {
    const user = await returnUser();
    // Récupération des infos
    // Vérification des informations pré-saisies
    await expect.soft(this.name_input).toHaveValue(`${user.name}`);
    await expect.soft(this.email_input).toHaveValue(`${user.email}`);
  }
  
  async dateSelection() {
    const user = await returnUser();
    await this.dayOfBirth_dropdown.selectOption(`${user.dayOfBirth}`);
    await this.monthOfBirth_dropdown.selectOption(`${user.monthOfBirth}`);
    await this.yearOfBirth_dropdown.selectOption(`${user.yearOfBirth}`);
  }
  
  async fillCreateAccountForm()  {
    // coche de la case en fonction du paramètre de titre
    const user = await returnUser();
    if (await user.title === "Mr.") {
      await this.titleMr_checkbox.check();
    } else {
      await this.titleMrs_checkbox.check();
    }
    await this.verifyNameAndEmail()
    await this.password_input.fill(`${user.password}`);
    await this.dateSelection();
    await this.newsletter_checkbox.check();

    await this.firstName_input.fill(`${user.firstName}`);
    await this.lastName_input.fill(`${user.lastName}`);
    await this.company_input.fill(`${user.company}`);
    await this.address_input.fill(`${user.address1}`);
    await this.address2_input.fill(`${user.address2}`);
    await this.country_dropdown.selectOption({value:`${user.country}`});
    await this.state_input.fill(`${user.state}`);
    await this.city_input.fill(`${user.city}`);
    await this.zipCode_input.fill(`${user.zipCode}`);
    await this.mobileNumber_input.fill(`${user.zipCode}`);
    await this.mobileNumber_input.fill(`${user.mobileNumber}`);

    }
    
    async validateForm() {
      await this.createAccount_btn.click();
    }

    async verifyAccountCreatedMessage() {
      await this.commonPage.verifyTextIsCorrect(this.accountCreated_Message, `Account Created!`);
    }

    async clickOnContinueButton() {
      await this.continue_btn.click();

    }

}