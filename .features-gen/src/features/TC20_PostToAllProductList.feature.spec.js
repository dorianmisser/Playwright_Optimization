/** Generated from: src\features\TC20_PostToAllProductList.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("POST To All Products List", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/productsList'", null, { apiUtils });
    await Then("le code de la réponse est 405", null, { apiUtils });
    await And("le message est le suivant : 'This request method is not supported.'", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC20_PostToAllProductList.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To All Products List": {"pickleLocation":"3:5","tags":["@api"]},
};