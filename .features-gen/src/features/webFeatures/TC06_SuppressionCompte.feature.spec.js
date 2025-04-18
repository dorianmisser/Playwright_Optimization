/** Generated from: src\features\webFeatures\TC06_SuppressionCompte.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Suppression de compte", () => {

  test("Suppression d'un compte client", { tag: ["@suppresionClient"] }, async ({ Given, homePage, When, loginPage, apiUtils, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je me connecte au compte \"random\"", null, { loginPage, apiUtils });
    await Then("je suis connecté au compte \"random\"", null, { homePage });
    await When("je supprime le compte créé", null, { homePage });
    await Then("le message Account Deleted! apparait", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC06_SuppressionCompte.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Suppression d'un compte client": {"pickleLocation":"3:5","tags":["@suppresionClient"]},
};