import { test, Given, When, Then } from "../../fixtures/web.fixtures";


export let item_name_1:string;
export let item_name_2:string;
export let product_name;
export let product_price;

When('je choisi la quantité suivante : {int} et j ajoute au panier`', async ({productDetailsPage}, quantity: number) => {
  await productDetailsPage.setProductQuantity(quantity);
  await productDetailsPage.clickOnAddToCart();
  await productDetailsPage.clickOnViewCart();
});

When('je clique sur le détail des produits', async ({productPage}) => {
  await productPage.verifyPresenceOnProductPage();
  product_name = await productPage.getProductName(1);
  product_price = await productPage.getProductPrice(1);
  await productPage.clickOnProductDetails(1);
});

Then('les éléments du produits sont visible', async ({productDetailsPage}) => {
  // vérification de la page
  await productDetailsPage.verifyProductDetailsPage(1)
  // vérification des éléments de la page (product name, category, price, availability, condition, brand)
  await productDetailsPage.verifyProductName(product_name);
  await productDetailsPage.verifyProductPrice(product_price);
  await productDetailsPage.verifyCategoryPresence();
  await productDetailsPage.verifyAvailabilityPresence();
  await productDetailsPage.verifyConditionPresence();
  await productDetailsPage.verifyBrandPresence();
});

When('je rédige un commentaire', async ({productDetailsPage}) => {
  await productDetailsPage.verifyProductDetailsPage(1);
  await productDetailsPage.fillNameInput();
  await productDetailsPage.fillEmailInput();
  await productDetailsPage.fillCommentBox();
  await productDetailsPage.clickOnSubmitBtn();
});

Then('le message Thank you for your review. apparait', async ({productDetailsPage}) => {
  await productDetailsPage.verifyProductDetailsPage(1);
  await productDetailsPage.verifySubmitMessage();
});