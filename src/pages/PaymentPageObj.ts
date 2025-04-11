import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { returnCreditCard, returnUser } from "../fixtures/randomizer";
import { readFileSync } from "fs";

export class PaymentPage {
    page:Page;
    context:BrowserContext;
    commonPage:CommonPage;
    readonly page_title: Locator;

    // CreditCard Form Locators
    readonly nameOnCard_field : Locator;
    readonly cardNumber_field : Locator;
    readonly cardCvc_field : Locator;
    readonly expirationMonth_field : Locator;
    readonly expirationYear_field : Locator;
    readonly payAndConfirmOrder_btn : Locator;
    readonly orderSuccessfull_msg : Locator;
    readonly orderPlacedConfirmed_msg : Locator;
    readonly downloadInvoice_btn : Locator;
    readonly continue_btn : Locator;


    constructor(page:Page, context:BrowserContext) {
        this.page = page;
        this.commonPage = new CommonPage(page, context);
        this.page_title = page.locator(`//h2[@class="heading"]`);
        this.nameOnCard_field = page.locator(`//input[@name="name_on_card"]`);
        this.cardNumber_field = page.locator(`//input[@name="card_number"]`);
        this.cardCvc_field = page.locator(`//input[@name="cvc"]`);
        this.expirationMonth_field = page.locator(`//input[@name="expiry_month"]`);
        this.expirationYear_field = page.locator(`//input[@name="expiry_year"]`);
        this.payAndConfirmOrder_btn = page.locator(`//button[@id="submit"]`);
        this.orderSuccessfull_msg = page.locator(`//div[@id="success_message"]/div`);
        this.orderPlacedConfirmed_msg = page.locator(`//section[@id="form"]//p`);
        this.downloadInvoice_btn = page.locator(`//a[@class="btn btn-default check_out"]`);
        this.continue_btn = page.locator(`//a[@data-qa="continue-button"]`);
    };

    async verifyPresenceOnPaymentPage() {
        await this.commonPage.verifyTextIsCorrect(this.page_title,`Payment`);
    };


    async fillCreditCardForm() {
        const userCreditCard = await returnCreditCard();
        await this.nameOnCard_field.fill(userCreditCard.nameOnCard);
        await this.cardNumber_field.fill(userCreditCard.cardNumber);
        await this.cardCvc_field.fill(userCreditCard.cvcNumber);
        await this.expirationMonth_field.fill(userCreditCard.expirationMonth);
        await this.expirationYear_field.fill(userCreditCard.expirationYear);
    };

    async clickOnPayAndConfirmOrder() {
        await this.payAndConfirmOrder_btn.click();
    };

    async verifyMessageOrderPlaced() {
        await this.commonPage.verifyTextIsCorrect(
            this.orderPlacedConfirmed_msg,`Congratulations! Your order has been confirmed!`);
    };

    async clickOnDownloadInvoiceOrder() {
        const [ download ] = await Promise.all([
            this.page.waitForEvent('download'), // wait for download to start
            this.downloadInvoice_btn.click()
        ]);
        // wait for download to complete
        const path = await download.path();
        await download.saveAs('src/data/fileDownloaded/invoice.txt');
    };

    async verifyFileDownloaded() {
        const user = await returnUser()
        const fileContent = await (readFileSync('src/data/fileDownloaded/invoice.txt')).toString();
        await expect.soft(fileContent).toBe(`Hi ${user.firstName} ${user.lastName}, Your total purchase amount is 500. Thank you`)
    }

    async clickOnContinueBtn() {
        await this.continue_btn.click();
    };
};