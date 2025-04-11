/** Generated from: src\features\TC25_PostToVerifyLoginWithValidDetails.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("POST To Verify Login with valid details", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url 'https://automationexercise.com/api/verifyLogin' avec les paramètres de connexion \"dodo.test@yopmail.com\" et \"password\"", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("le message est le suivant : 'User exists!'", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC25_PostToVerifyLoginWithValidDetails.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To Verify Login with valid details": {"pickleLocation":"3:5","tags":["@api"]},
};