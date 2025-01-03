import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage} from "./CommonPageObj";


export class CartPage {

  readonly page: Page;
  readonly commonPage:CommonPage;
  readonly cartEmptyMessage: Locator;
  readonly cartProductName: Locator;
  readonly cart_menubtn: Locator;
  readonly cartQuantity_btn: Locator;
  readonly productInCart_line: Locator;
  readonly registerLogin_btn:Locator;
  readonly proceedToCheckout_btn: Locator;

constructor(page:Page, context:BrowserContext) {
  this.page = page;
  this.commonPage = new CommonPage(page, context);
  this.cartEmptyMessage = page.locator(`//p[@class="text-center"]/b`);
  this.cartProductName = page.locator(`//a[contains(@href,"/product_details/")]`);
  this.cart_menubtn = page.locator(`//a[@href="/view_cart"]`);
  this.cartQuantity_btn = page.locator(`//button[@class="disabled"]`);
  this.productInCart_line = page.locator(`//tr[(contains(@id,"product"))]`);
  this.proceedToCheckout_btn = page.locator(`//a[@class="btn btn-default check_out"]`)
  this.registerLogin_btn = page.locator(`//a[@href="/login"]/u`);
}
  async verifyPresenceOnCartPage() {
  await this.commonPage.verifyActivePage(this.cart_menubtn);
  }

  async verifyCartContent(numberExpected:number) {

    const nbProductsInCart = await this.productInCart_line.count();
    await this.commonPage.expectElementToEqual(nbProductsInCart,numberExpected);
    // await verifyTextIsCorrect(this.cartProductName.nth(0),item_name1);
    // await verifyTextIsCorrect(this.cartProductName.nth(1),item_name2);
  }

  async verifyCartQuantity(expectedQuantity:string) {
    await this.commonPage.verifyTextIsCorrect(this.cartQuantity_btn, expectedQuantity)
  }

  async clickOnProceedToCheckout() {
    await this.proceedToCheckout_btn.click();
  }

  async clickOnRegisterLogin() {
    await this.registerLogin_btn.click()
  }

}

