/** Generated from: src\features\TC11_VerificationQuantitePanier.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Produit", () => {

  test("Vérification de la quantité dans le panier", { tag: ["@browser"] }, async ({ Given, productPage, productDetailsPage, When, Then, cartPage, And, context }) => {
    await Given("je me rends sur la page du détail d'un produit", null, { productPage, productDetailsPage });
    await When("je choisi la quantité suivante : 4 et j ajoute au panier`", null, { productDetailsPage });
    await Then("la quantité dans le panier correspond à la quantité selectionnée", null, { cartPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC11_VerificationQuantitePanier.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Vérification de la quantité dans le panier": {"pickleLocation":"3:5","tags":["@browser"]},
};