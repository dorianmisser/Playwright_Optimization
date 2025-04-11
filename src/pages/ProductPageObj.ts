import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPageObj";

export class ProductPage {

  readonly page:Page;
  readonly productPage_url:string;
  readonly commonPage:CommonPage;
  readonly research_field: Locator;
  readonly viewCart_btn:Locator;
  readonly item1Name:Locator;
  readonly item2Name:Locator;
  readonly submit_btn: Locator;
  readonly products:Locator;
  readonly productsName:Locator;
  readonly productsPrice: Locator;
  readonly productsNameAfterHover: Locator;
  readonly addToCartItem_btn: Locator;
  readonly item2AfterHover: Locator;
  readonly addedToCart_Message: Locator;
  readonly goToCart_btn: Locator;
  readonly continueShopping_btn: Locator;
  readonly viewProduct_btn: Locator;
  readonly products_menubtn:Locator;
  readonly viewCart_menubtn: Locator;
  
  
  constructor(page:Page,context:BrowserContext) {
    this.page = page;
    this.commonPage = new CommonPage(page, context);
    this.productPage_url = `https://www.automationexercise.com/products`;
    this.products_menubtn = page.locator(`//a[@href="/products"]`);
    this.research_field = page.locator("#search_product");
    this.submit_btn = page.locator("#submit_search");
    this.viewCart_menubtn = page.locator(`//li//a[@href="/view_cart"]`);
    this.viewCart_btn = page.locator(`//div[@class="modal-content"]//a[@href='/view_cart']`);
    this.products = page.locator("div.single-products");
    this.productsName = page.locator(`//div[@class='overlay-content']/p`);
    this.productsPrice = page.locator(`//div[@class='overlay-content']/h2`);
    this.productsNameAfterHover = page.locator(`//div[@class="overlay-content"]/p`);
    this.addToCartItem_btn = page.locator(`//div[@class='productinfo text-center']//a`);
    this.item2AfterHover = page.locator(`//div[@class='productinfo text-center']//a[@data-product-id='2']`);
    this.addedToCart_Message = page.locator(`//p[@class='text-center' and contains(.,'Your product')]`);
    this.goToCart_btn = page.locator(`//a[@href="/view_cart"]`);
    this.continueShopping_btn = page.locator(`button.btn-success`);
    this.viewProduct_btn = page.locator(`//a[contains(@href,"/product_details/")]`);
  }

  async navigateToProductPage() {
    await this.commonPage.navigateToUrl(this.productPage_url);
  }

  async verifyPresenceOnProductPage() {
    await this.commonPage.verifyActivePage(this.products_menubtn);

  }

  async researchItem(itemResearched:string) {
    await this.research_field.fill(itemResearched);
    await this.submit_btn.click();
  }

  async verifyListProducts() {
  let nb_elements = await this.products.count();
  for(let x=1; x < nb_elements; x++) {
    const item_name = await this.productsName.nth(x).textContent();
    expect (
      item_name?.includes('Top') || item_name?.includes('Shirt'),
      `le resultat ${x} ne contient ni 'Top' ni 'Shirt'. ${item_name}`);
  }
}
  async addProductToCart(IndexItem:number) {
    await this.commonPage.hoverOnElement((this.productsNameAfterHover).nth(IndexItem-1));
    await this.addToCartItem_btn.nth(IndexItem-1).click();
  }

  async getProductName(index:number) {
    const item_name = await this.productsName.nth(index-1).innerText();
    return item_name
  }

  async getProductPrice(index:number) {
    const item_price = await this.productsPrice.nth(index-1).innerText();
    return item_price
  }

  async verifyAddedToCartMessage() {
    await this.commonPage.verifyTextIsCorrect(this.addedToCart_Message, 'Your product has been added to cart.');
  }

  async clickOnContinueShoppingBtn() {
    await this.continueShopping_btn.click();
  }

  async clickOnViewCartBtn() {
    // clique sur le lien présent dans la pop-up après avoir ajouté un produit au panier
    await this.viewCart_btn.click();
  }

  async clickonViewCartMenubtn() {
    await this.viewCart_menubtn.click();
  }

  async clickOnProductDetails(productNumber:number) {
    await this.viewProduct_btn.nth(productNumber-1).click();
  }

};