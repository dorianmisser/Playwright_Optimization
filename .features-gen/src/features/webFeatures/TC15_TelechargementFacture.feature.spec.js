/** Generated from: src\features\webFeatures\TC15_TelechargementFacture.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Tunnel de commande", () => {

  test("Télécharger une facture après la commande", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, And, cartPage, loginPage, apiUtils, Then, page, checkoutPage, paymentPage, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 1 produit.s dans mon panier", null, { productPage });
    await And("je clique sur Proceed To Checkout et sur le bouton RegisterLogin", null, { cartPage });
    await And("je me connecte au compte \"random\"", null, { loginPage, apiUtils });
    await Then("je suis connecté au compte \"random\"", null, { homePage });
    await When("je me rends sur la page du panier", null, { homePage, page });
    await When("je procède à la commande", null, { cartPage, checkoutPage, paymentPage });
    await When("je clique sur le bouton Download Invoice", null, { paymentPage });
    await Then("le fichier se télécharge et correpond à l'attendu", null, { paymentPage });
    await Then("ma commande est réalisée", null, { paymentPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC15_TelechargementFacture.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Télécharger une facture après la commande": {"pickleLocation":"3:5","tags":["@browser"]},
};