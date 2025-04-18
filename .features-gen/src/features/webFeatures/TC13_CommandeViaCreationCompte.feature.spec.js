/** Generated from: src\features\webFeatures\TC13_CommandeViaCreationCompte.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Tunnel de commande", () => {

  test("Création compte pendant la commande", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, And, cartPage, loginPage, userCreationPage, Then, page, checkoutPage, paymentPage, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 1 produit.s dans mon panier", null, { productPage });
    await And("je clique sur Proceed To Checkout et sur le bouton RegisterLogin", null, { cartPage });
    await And("je rempli le pré-formulaire de création avec des identifiants nouveaux", null, { loginPage });
    await And("je rempli le formulaire de création", null, { userCreationPage });
    await Then("un compte client est créé", null, { userCreationPage, homePage });
    await When("je me rends sur la page du panier", null, { homePage, page });
    await When("je procède à la commande", null, { cartPage, checkoutPage, paymentPage });
    await Then("ma commande est réalisée", null, { paymentPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC13_CommandeViaCreationCompte.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création compte pendant la commande": {"pickleLocation":"3:5","tags":["@browser"]},
};