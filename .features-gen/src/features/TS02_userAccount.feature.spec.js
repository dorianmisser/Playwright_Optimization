/** Generated from: src\features\TS02_userAccount.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Connexion Compte client", () => {

  test("Connexion compte client OK", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je me connecte à mon compte", null, { loginPage });
    await Then("je suis connecté à mon compte", null, { homePage });
    await And("je ferme le navigateur", null, { context });
  });

  test("Connexion compte client KO", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je saisis des informations de connexion incorrectes", null, { loginPage });
    await Then("je ne suis pas connecté", null, { loginPage });
    await And("je ferme le navigateur", null, { context });
  });

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
  $uri: ({}, use) => use("src\\features\\TS02_userAccount.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Connexion compte client OK": {"pickleLocation":"3:5","tags":["@browser"]},
  "Connexion compte client KO": {"pickleLocation":"9:5","tags":["@browser"]},
  "Deconnexion compte client": {"pickleLocation":"15:5","tags":["@browser"]},
};