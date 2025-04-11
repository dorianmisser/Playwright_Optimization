/** Generated from: src\features\TC23_PostToSearchProducts.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("POST To Search Product", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct' avec le paramètre de recherche 'tshirt'", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("la réponse doit contenir les informations produits souhaitées", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC23_PostToSearchProducts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To Search Product": {"pickleLocation":"3:5","tags":["@api"]},
};