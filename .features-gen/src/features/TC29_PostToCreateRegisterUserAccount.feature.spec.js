/** Generated from: src\features\TC29_PostToCreateRegisterUserAccount.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("API 11: POST To Create/Register User Account", { tag: ["@api"] }, async ({ Given, When, apiUtils, Then, And }) => {
    await Given("je génère des informations clients randoms");
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/createAccount\" avec les paramètres pour créer un nouveau client", null, { apiUtils });
    await Then("le code de la réponse est 201", null, { apiUtils });
    await And("le message est le suivant : \"User created!\"", null, { apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC29_PostToCreateRegisterUserAccount.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "API 11: POST To Create/Register User Account": {"pickleLocation":"3:5","tags":["@api"]},
};