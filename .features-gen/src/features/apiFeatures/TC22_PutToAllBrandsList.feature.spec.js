/** Generated from: src\features\apiFeatures\TC22_PutToAllBrandsList.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("PUT To All Brands List", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"PUT\" vers url 'https://automationexercise.com/api/brandsList'", null, { apiUtils });
    await Then("le code de la réponse est 405", null, { apiUtils });
    await And("le message est le suivant : 'This request method is not supported.'", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC22_PutToAllBrandsList.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT To All Brands List": {"pickleLocation":"3:5","tags":["@api"]},
};