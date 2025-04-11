/** Generated from: src\features\TC03_Connexion.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Connexion Compte client", () => {

  test("Connexion compte client OK", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je me connecte à mon compte", null, { loginPage });
    await Then("je suis connecté à mon compte", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC03_Connexion.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Connexion compte client OK": {"pickleLocation":"3:5","tags":["@browser"]},
};