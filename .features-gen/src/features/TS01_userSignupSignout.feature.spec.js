/** Generated from: src\features\TS01_userSignupSignout.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Création Compte client", () => {

  test("Création d'un compte client", { tag: ["@browser"] }, async ({ Given, commonPage, homePage, And, When, loginPage, userCreationPage, Then, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await commonPage.pauseTest();
    await And("je génère des informations clients randoms");
    await When("je rempli le pré-formulaire de création avec des identifiants nouveaux", null, { loginPage });
    await When("je rempli le formulaire de création", null, { userCreationPage });
    await Then("un compte client est créé", null, { userCreationPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

  test("Création compte client avec mail existant", { tag: ["@browser"] }, async ({ Given, homePage, When, loginPage, Then, And, context }) => {
    await Given("je me rends sur la page de connexion", null, { homePage });
    await When("je rempli le pré-formulaire de création avec des identifiants existants", null, { loginPage });
    await Then("je ne peux pas créer de compte", null, { loginPage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TS01_userSignupSignout.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création d'un compte client": {"pickleLocation":"3:5","tags":["@browser"]},
  "Création compte client avec mail existant": {"pickleLocation":"11:5","tags":["@browser"]},
};