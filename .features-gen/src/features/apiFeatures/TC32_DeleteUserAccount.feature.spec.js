/** Generated from: src\features\apiFeatures\TC32_DeleteUserAccount.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("DELETE METHOD To Delete User Account", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"DELETE\" vers url \"https://automationexercise.com/api/deleteAccount\" avec les paramètres pour supprimer une fiche client", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("le message est le suivant : \"Account deleted!\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC32_DeleteUserAccount.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE METHOD To Delete User Account": {"pickleLocation":"3:5","tags":["@api"]},
};