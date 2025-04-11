/** Generated from: src\features\TC05_Deconnexion.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Connexion Compte client", () => {

  test("Deconnexion compte client", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je me connecte à mon compte", null, { loginPage });
    await Then("je suis connecté à mon compte", null, { homePage });
    await When("je me deconnecte", null, { homePage });
    await Then("je suis deconnecté", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC05_Deconnexion.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Deconnexion compte client": {"pickleLocation":"3:5","tags":["@browser"]},
};