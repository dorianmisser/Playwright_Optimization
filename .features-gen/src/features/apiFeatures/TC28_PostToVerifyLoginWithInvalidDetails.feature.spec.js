/** Generated from: src\features\apiFeatures\TC28_PostToVerifyLoginWithInvalidDetails.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("POST To Verify Login with invalid details", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/verifyLogin\" avec les paramètres de connexion \"dodoKO@yopmail.com\" et \"passwordKO\"", null, { apiUtils });
    await Then("le code de la réponse est 404", null, { apiUtils });
    await And("le message est le suivant : \"User not found!\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC28_PostToVerifyLoginWithInvalidDetails.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To Verify Login with invalid details": {"pickleLocation":"3:5","tags":["@api"]},
};