/** Generated from: src\features\TC07_RechercheProduit.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Produit", () => {

  test("Recherche d'un produit", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("je saisis \"Top\" dans la barre de recherche", null, { productPage });
    await Then("la liste des résultats correspond bien à la recherche", null, { productPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC07_RechercheProduit.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Recherche d'un produit": {"pickleLocation":"3:5","tags":["@browser"]},
};