/** Generated from: src\features\TS07_order.feature */
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

  test("Télécharger une facture après la commande", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, And, cartPage, loginPage, Then, checkoutPage, paymentPage, commonPage, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 1 produit.s dans mon panier", null, { productPage });
    await And("je clique sur Proceed To Checkout et sur le bouton RegisterLogin", null, { cartPage });
    await And("je me connecte à mon compte", null, { loginPage });
    await Then("je suis connecté à mon compte", null, { homePage });
    await When("je procède à la commande", null, { homePage, cartPage, checkoutPage, paymentPage });
    await When("je clique sur le bouton Download Invoice", null, { paymentPage, commonPage });
    await Then("le fichier se télécharge et correpond à l'attendu", null, { paymentPage });
    await Then("ma commande est réalisée", null, { paymentPage, homePage });
    await When("je supprime le compte créé", null, { homePage });
    await Then("le message Account Deleted! apparait", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TS07_order.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création compte pendant la commande": {"pickleLocation":"3:5","tags":["@browser"]},
  "Connexion compte pendant la commande": {"pickleLocation":"15:5","tags":["@browser"]},
  "Télécharger une facture après la commande": {"pickleLocation":"25:5","tags":["@browser"]},
};