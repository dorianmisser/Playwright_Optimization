/** Generated from: src\features\apiFeatures\TC31_GetUserAccountDetailByEmail.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("GET user account detail by email", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"GET\" vers url \"https://automationexercise.com/api/getUserDetailByEmail\" avec le paramètre email", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("la réponse contient la fiche client", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC31_GetUserAccountDetailByEmail.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET user account detail by email": {"pickleLocation":"3:5","tags":["@api"]},
};