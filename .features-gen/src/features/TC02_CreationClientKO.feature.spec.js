/** Generated from: src\features\TC02_CreationClientKO.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Création Compte client", () => {

  test("Création compte client avec mail existant", { tag: ["@ajoutClientKO"] }, async ({ Given, homePage, When, loginPage, randomUser, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je rempli le pré-formulaire de création avec des identifiants existants", null, { loginPage, randomUser });
    await Then("je ne peux pas créer de compte", null, { loginPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC02_CreationClientKO.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création compte client avec mail existant": {"pickleLocation":"3:5","tags":["@ajoutClientKO"]},
};