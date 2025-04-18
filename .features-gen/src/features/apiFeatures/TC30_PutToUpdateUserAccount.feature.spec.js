/** Generated from: src\features\apiFeatures\TC30_PutToUpdateUserAccount.feature */
import { test } from "../../../../src/fixtures/api.fixtures.ts";

test.describe("API Products", () => {

  test("PUT METHOD To Update User Account", { tag: ["@api"] }, async ({ When, apiUtils, Then, And }) => {
    await When("un appel \"PUT\" vers url \"https://automationexercise.com/api/updateAccount\" avec les paramètres pour mettre à jour une fiche client", null, { apiUtils });
    await Then("le code de la réponse est 200", null, { apiUtils });
    await And("le message est le suivant : \"User updated!\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\apiFeatures\\TC30_PutToUpdateUserAccount.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT METHOD To Update User Account": {"pickleLocation":"3:5","tags":["@api"]},
};