/** Generated from: src\features\webFeatures\TC04_ConnexionKO.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Connexion Compte client", () => {

  test("Connexion compte client KO", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, apiUtils, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je saisis des informations de connexion incorrectes", null, { loginPage, apiUtils });
    await Then("je ne suis pas connecté", null, { loginPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC04_ConnexionKO.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Connexion compte client KO": {"pickleLocation":"3:5","tags":["@browser"]},
};