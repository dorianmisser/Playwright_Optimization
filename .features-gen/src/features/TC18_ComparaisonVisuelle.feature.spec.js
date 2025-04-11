/** Generated from: src\features\TC18_ComparaisonVisuelle.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Test de comparaison visuel", () => {

  test("Page d'accueil", { tag: ["@browser"] }, async ({ Given, homePage, When, page }) => {
    await Given("je suis sur la page d'accueil", null, { homePage });
    await When("je vérifie que la page correspond à l'attendu", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TC18_ComparaisonVisuelle.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Page d'accueil": {"pickleLocation":"3:5","tags":["@browser"]},
};