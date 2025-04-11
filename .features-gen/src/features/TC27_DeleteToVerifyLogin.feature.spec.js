/** Generated from: src\features\TC27_DeleteToVerifyLogin.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("DELETE To Verify Login", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"DELETE\" vers url \"https://automationexercise.com/api/verifyLogin\"", null, { apiUtils });
    await Then("le code de la réponse est 405", null, { apiUtils });
    await And("le message est le suivant : \"This request method is not supported.\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC27_DeleteToVerifyLogin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE To Verify Login": {"pickleLocation":"3:5","tags":["@api"]},
};