/** Generated from: src\features\webFeatures\TC12_FormulairedeContact.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Formulaire Nous Contacter", () => {

  test("Remplir le formulaire \"Nous contacter\"", { tag: ["@browser"] }, async ({ Given, homePage, When, contactUsPage, Then, And, context }) => {
    await Given("je clique sur le bouton contact us", null, { homePage });
    await When("je rempli le formulaire de contact", null, { homePage, contactUsPage });
    await Then("le message Success! Your details have been submitted successfully. apparait", null, { contactUsPage, homePage });
    await And("je ferme le navigateur", null, { context });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC12_FormulairedeContact.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Remplir le formulaire \"Nous contacter\"": {"pickleLocation":"3:5","tags":["@browser"]},
};