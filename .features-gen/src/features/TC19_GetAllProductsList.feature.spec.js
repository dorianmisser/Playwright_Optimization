/** Generated from: src\features\TC19_GetAllProductsList.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("Get All Products List", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel 'GET' vers url 'https://automationexercise.com/api/productsList'", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("la réponse doit contenir les informations produits souhaitées", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC19_GetAllProductsList.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Get All Products List": {"pickleLocation":"3:5","tags":["@api"]},
};