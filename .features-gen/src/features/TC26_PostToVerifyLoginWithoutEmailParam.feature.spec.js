/** Generated from: src\features\TC26_PostToVerifyLoginWithoutEmailParam.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("POST To Verify Login without email parameter", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/verifyLogin\" avec le paramètre de connexion \"password\"", null, { apiUtils });
    await Then("le code de la réponse est 400", null, { apiUtils });
    await And("le message est le suivant : \"Bad request, email or password parameter is missing in POST request.\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC26_PostToVerifyLoginWithoutEmailParam.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST To Verify Login without email parameter": {"pickleLocation":"3:5","tags":["@api"]},
};