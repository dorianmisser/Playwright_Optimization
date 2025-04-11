/** Generated from: src\features\TC13_CommandeViaCreationCompte.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Tunnel de commande", () => {

  test("Création compte pendant la commande", { tag: ["@browser"] }, async ({ Given, homePage, And, When, productPage, cartPage, loginPage, userCreationPage, Then, checkoutPage, paymentPage, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await And("je génère des informations clients randoms");
    await When("j ajoute 1 produit.s dans mon panier", null, { productPage });
    await And("je clique sur Proceed To Checkout et sur le bouton RegisterLogin", null, { cartPage });
    await And("je rempli le pré-formulaire de création avec des identifiants nouveaux", null, { loginPage });
    await And("je rempli le formulaire de création", null, { userCreationPage });
    await Then("un compte client est créé", null, { userCreationPage, homePage });
    await When("je procède à la commande", null, { homePage, cartPage, checkoutPage, paymentPage });
    await Then("ma commande est réalisée", null, { paymentPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC13_CommandeViaCreationCompte.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création compte pendant la commande": {"pickleLocation":"3:5","tags":["@browser"]},
};