import { test, Given, When, Then } from "../../fixtures/web.fixtures";

Then('mon panier contient les deux produits selectionnés', async ({cartPage}) => {
  
  await cartPage.verifyPresenceOnCartPage();
  await cartPage.verifyCartContent(2);
});

Given(`je me rends sur la page du détail d'un produit`, async ({ productPage, productDetailsPage}) => {
  await productPage.navigateToProductPage();
  await productPage.verifyPresenceOnProductPage();
  await productPage.clickOnProductDetails(1);
  await productDetailsPage.verifyProductDetailsPage(1);
});

When(`je choisi la quantité suivante : {int} et j ajoute au panier`, async ({productDetailsPage}, requiredQuantity:number) => {
  await productDetailsPage.verifyProductDetailsPage(1);
  await productDetailsPage.setProductQuantity(requiredQuantity);
  await productDetailsPage.clickOnAddToCart();
  await productDetailsPage.clickOnViewCart();
});

Then(`la quantité dans le panier correspond à la quantité selectionnée`, async({cartPage}) => {
  await cartPage.verifyCartQuantity("4");
});

When('je clique sur Proceed To Checkout et sur le bouton RegisterLogin', async ({cartPage}) => {
  await cartPage.clickOnProceedToCheckout();
  await cartPage.clickOnRegisterLogin();
});





