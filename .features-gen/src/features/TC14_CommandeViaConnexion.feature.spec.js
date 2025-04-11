/** Generated from: src\features\TC14_CommandeViaConnexion.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Tunnel de commande", () => {

  test("Connexion compte pendant la commande", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, And, cartPage, loginPage, Then, checkoutPage, paymentPage, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 1 produit.s dans mon panier", null, { productPage });
    await And("je clique sur Proceed To Checkout et sur le bouton RegisterLogin", null, { cartPage });
    await And("je me connecte à mon compte", null, { loginPage });
    await Then("je suis connecté à mon compte", null, { homePage });
    await When("je procède à la commande", null, { homePage, cartPage, checkoutPage, paymentPage });
    await Then("ma commande est réalisée", null, { paymentPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC14_CommandeViaConnexion.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Connexion compte pendant la commande": {"pickleLocation":"3:5","tags":["@browser"]},
};