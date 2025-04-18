/** Generated from: src\features\webFeatures\TC03_Connexion.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Connexion Compte client", () => {

  test("Connexion compte client OK", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, apiUtils, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je me connecte au compte \"dodo\"", null, { loginPage, apiUtils });
    await Then("je suis connecté au compte \"dodo\"", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC03_Connexion.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Connexion compte client OK": {"pickleLocation":"3:5","tags":["@browser"]},
};