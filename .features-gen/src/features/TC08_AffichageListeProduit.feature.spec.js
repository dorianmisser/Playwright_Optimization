/** Generated from: src\features\TC08_AffichageListeProduit.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Produit", () => {

  test("Affichage de la liste des produits", { tag: ["@browser"] }, async ({ Given, homePage, When, productPage, Then, productDetailsPage, And, context }) => {
    await Given("je me rends sur la page des produits", null, { homePage });
    await When("je clique sur le détail des produits", null, { productPage });
    await Then("les éléments du produits sont visible", null, { productDetailsPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC08_AffichageListeProduit.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Affichage de la liste des produits": {"pickleLocation":"3:5","tags":["@browser"]},
};