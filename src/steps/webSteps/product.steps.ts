import { test, Given, When, Then } from "../../fixtures/web.fixtures";

When('je saisis {string} dans la barre de recherche', async ({productPage}, researchedItem) => {
  await productPage.verifyPresenceOnProductPage();
  await productPage.researchItem(researchedItem);
  });

Then(`la liste des résultats correspond bien à la recherche`, async ({productPage}) => {
  await productPage.verifyPresenceOnProductPage();
  await productPage.verifyListProducts();
});

When('j ajoute {int} produit.s dans mon panier', async ({productPage}, numberItems:number) => {
  var index = 1;
  while (index <= numberItems) {
    await productPage.addProductToCart(index);
    await productPage.clickOnContinueShoppingBtn();
    index++;
  }
    await productPage.clickonViewCartMenubtn();
});