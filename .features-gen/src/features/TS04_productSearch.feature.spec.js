/** Generated from: src\features\TS04_productSearch.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Produit", () => {

  test("Recherche d'un produit", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("je saisis \"Top\" dans la barre de recherche", null, { productPage });
    await Then("la liste des résultats correspond bien à la recherche", null, { productPage });
    await And("je ferme le navigateur", null, { context });
  });

  test("Affichage de la liste des produits", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, productDetailsPage, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("je clique sur le détail des produits", null, { productPage });
    await Then("les éléments du produits sont visible", null, { productDetailsPage });
    await And("je ferme le navigateur", null, { context });
  });

  test("Redaction d'un commentaire sur un produit", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, And, productDetailsPage, Then, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("je clique sur le détail des produits", null, { productPage });
    await And("je rédige un commentaire", null, { productDetailsPage });
    await Then("le message Thank you for your review. apparait", null, { productDetailsPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TS04_productSearch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Recherche d'un produit": {"pickleLocation":"3:5","tags":["@browser"]},
  "Affichage de la liste des produits": {"pickleLocation":"9:5","tags":["@browser"]},
  "Redaction d'un commentaire sur un produit": {"pickleLocation":"15:5","tags":["@browser"]},
};