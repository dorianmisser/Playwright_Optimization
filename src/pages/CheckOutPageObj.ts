import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";
import { returnUser } from "../fixtures/randomizer";
import { faker } from "@faker-js/faker/locale/fr";


export class CheckOutPage{
    readonly page:Page;
    readonly commonPage : CommonPage;
    readonly page_breadcrumb : Locator;
    readonly deliveryAddressFirstAndLastname : Locator;
    readonly deliveryAddressDetails_box: Locator;
    readonly deliveryAddressCompany: Locator;
    readonly deliveryAddress1: Locator;
    readonly deliveryAddress2: Locator;
    readonly deliveryAddressCityStatePostcode: Locator;
    readonly deliveryAddressCountry: Locator;
    readonly deliveryAddressPhone: Locator;

    readonly billingAdressDetails_box: Locator;
    readonly billingAddressFirstAndLastname : Locator;
    readonly billingAddressCompany: Locator;
    readonly billingAddress1: Locator;
    readonly billingAddress2: Locator;

    readonly billingAddressCityStatePostcode: Locator;
    readonly billingAddressCountry: Locator;
    readonly billingAddressPhone: Locator;
    readonly deliveryAddressAllDetails: Locator;
    readonly billingAddressAllDetails: Locator;
    
    readonly orderPrice: Locator;
    readonly orderquantity : Locator;
    readonly totalAmount : Locator;
    readonly commentary_textarea: Locator;
    readonly placeOrder_btn: Locator;

    constructor(page:Page, context: BrowserContext) {
        this.page = page;
        this.commonPage = new CommonPage(page, context);
        this.page_breadcrumb = page.locator(`//div[@class="breadcrumbs"]/ol/li[@class="active"]`);

        // Delivery Address Locators
        this.deliveryAddressDetails_box = page.locator(`//ul[@id="address_delivery"]`);
        this.deliveryAddressAllDetails = page.locator(`//ul[@id="address_delivery"]/li`);
        this.deliveryAddressFirstAndLastname = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_firstname address_lastname"]`);
        this.deliveryAddressCompany = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_address1 address_address2"]`).first();
        this.deliveryAddress1 = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_address1 address_address2"]`).nth(1);
        this.deliveryAddress2 = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_address1 address_address2"]`).nth(2);

        
        this.deliveryAddressCityStatePostcode = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_city address_state_name address_postcode"]`);
        this.deliveryAddressCountry = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_country_name"]`);
        this.deliveryAddressPhone = page.locator(
            `//ul[@id="address_delivery"]/li[@class="address_phone"]`);

        // Billing Address Locators
        this.billingAdressDetails_box = page.locator(`//ul[@id="address_invoice"]`);
        this.billingAddressAllDetails = page.locator(`//ul[@id="address_invoice"]/li`);
        this.billingAddressFirstAndLastname = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_firstname address_lastname"]`);
        this.billingAddressCompany = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_address1 address_address2"]`).first();
        this.billingAddress1 = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_address1 address_address2"]`).nth(1);
        this.billingAddress2 = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_address1 address_address2"]`).nth(2);
        this.billingAddressCityStatePostcode = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_city address_state_name address_postcode"]`);
        this.billingAddressCountry = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_country_name"]`);
        this.billingAddressPhone = page.locator(
            `//ul[@id="address_invoice"]/li[@class="address_phone"]`);

        this.orderPrice = page.locator(`//tr/td[@class="cart_price"]/p`);
        this.orderquantity = page.locator(`//tr/td[@class="cart_quantity"]/button`);
        this.totalAmount = page.locator(`//tr/td/p[@class="cart_total_price"]`).last();

        this.commentary_textarea = page.locator(`//textarea[@class="form-control"]`);

        this.placeOrder_btn = page.locator(`//a[@href="/payment"]`);
    }

    async verifyPresenceOnCheckoutPage() {
        await this.commonPage.verifyTextIsCorrect(this.page_breadcrumb,`Checkout`)
    }

    async verifyPresenceOfDeliveryBox() {
        await this.commonPage.elementIsVisible(this.deliveryAddressDetails_box);
    }

    async verifyPresenceOfBillingBox() {
        await this.commonPage.elementIsVisible(this.billingAdressDetails_box);
    }

    async logAddressDetails() {
        const address_details = await this.deliveryAddressAllDetails.allInnerTexts();
    };

    async verifyDeliveryAdressDetails() {
        const user = await returnUser();
        const deliveryDetailsExpected = [
            `Your delivery address`,
            `Mr. ${user.firstName} ${user.lastName}`,
            `${user.company}`,
            `${user.address1}`,
            `${user.address2}`,
            `${user.city} ${user.state} ${user.zipCode}`,
            `${user.country}`,
            `${user.mobileNumber}`
            ];
        await this.commonPage.verifyTextElements(this.deliveryAddressAllDetails, deliveryDetailsExpected);
    };
    
    async verifyBillingAdressDetails() {
        const user = await returnUser();
        const billingDetailsExpected = [
            `Your billing address`,
            `Mr. ${user.firstName} ${user.lastName}`,
            `${user.company}`,
            `${user.address1}`,
            `${user.address2}`,
            `${user.city} ${user.state} ${user.zipCode}`,
            `${user.country}`,
            `${user.mobileNumber}`
            ];
        await expect.soft(this.billingAddressAllDetails).toHaveText(billingDetailsExpected);
    };

    async verifyTotalCartPrice() {
        var priceText = Number((await this.orderPrice.textContent())?.replace(`Rs. `,``));
        var quantity = Number(await this.orderquantity.textContent());
        var amount = Number((await this.totalAmount.textContent())?.replace(`Rs. `, ``));
        var amount_expected = priceText * quantity;
        expect.soft(amount).toBe(amount_expected);
    }

    async fillCommentary() {
        const commentary = faker.lorem.lines(10);
        this.commentary_textarea.fill(commentary);
    }

    async clickOnPlaceOrderBtn() {
        this.placeOrder_btn.click();
    }




}