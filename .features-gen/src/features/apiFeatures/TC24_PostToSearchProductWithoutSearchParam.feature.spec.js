/** Generated from: src\features\apiFeatures\TC24_PostToSearchProductWithoutSearchParam.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("POST To Search Product without search_product parameter", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct'", null, { apiUtils });
    await Then("le code de la réponse est 400", null, { apiUtils });
    await And("le message est le suivant : 'Bad request, search_product parameter is missing in POST request.'", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC24_PostToSearchProductWithoutSearchParam.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To Search Product without search_product parameter": {"pickleLocation":"3:5","tags":["@api"]},
};