/** Generated from: src\features\webFeatures\TC10_AjoutProduitsPanier.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Produit", () => {

  test("Ajout de deux produits au panier", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, cartPage, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 2 produit.s dans mon panier", null, { productPage });
    await Then("mon panier contient les deux produits selectionnés", null, { cartPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC10_AjoutProduitsPanier.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Ajout de deux produits au panier": {"pickleLocation":"3:5","tags":["@browser"]},
};