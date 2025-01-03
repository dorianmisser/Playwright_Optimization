/** Generated from: src\features\TS05_cart.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Produit", () => {

  test("Ajout de deux produits au panier", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, cartPage, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("j ajoute 2 produit.s dans mon panier", null, { productPage });
    await Then("mon panier contient les deux produits selectionnés", null, { cartPage });
    await And("je ferme le navigateur", null, { context });
  });

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
  $uri: ({}, use) => use("src\\features\\TS05_cart.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Ajout de deux produits au panier": {"pickleLocation":"3:5","tags":["@browser"]},
  "Vérification de la quantité dans le panier": {"pickleLocation":"9:5","tags":["@browser"]},
};