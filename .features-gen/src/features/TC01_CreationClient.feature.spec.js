/** Generated from: src\features\TC01_CreationClient.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Création Compte client", () => {

  test("Création d'un compte client", { tag: ["@ajoutClient"] }, async ({ Given, homePage, When, loginPage, userCreationPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je rempli le pré-formulaire de création avec des identifiants nouveaux", null, { loginPage });
    await When("je rempli le formulaire de création", null, { userCreationPage });
    await Then("un compte client est créé", null, { userCreationPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC01_CreationClient.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création d'un compte client": {"pickleLocation":"5:5","tags":["@ajoutClient"]},
};