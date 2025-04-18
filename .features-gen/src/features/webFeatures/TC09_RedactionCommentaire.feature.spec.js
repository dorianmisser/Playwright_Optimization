/** Generated from: src\features\webFeatures\TC09_RedactionCommentaire.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Produit", () => {

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
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC09_RedactionCommentaire.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Redaction d'un commentaire sur un produit": {"pickleLocation":"3:5","tags":["@browser"]},
};