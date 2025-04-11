/** Generated from: src\features\TC21_GetAllBrandsList.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("Get All Brands List", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel 'GET' vers url 'https://automationexercise.com/api/brandsList'", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("la réponse doit contenir les informations de marques souhaitées", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC21_GetAllBrandsList.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Get All Brands List": {"pickleLocation":"3:5","tags":["@api"]},
};