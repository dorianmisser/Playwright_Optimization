/** Generated from: src\features\TS08_scrollUpAndDown.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("Scroll sur la page d'accueil via la flèche", () => {

  test("Création compte pendant la commande", { tag: ["@browser"] }, async ({ Given, homePage, When, commonPage, Then }) => {
    await Given("je suis sur la page d'accueil", null, { homePage });
    await When("je scrolle jusqu'au footer", null, { commonPage });
    await Then("le texte 'Subscription' is visible", null, { homePage });
    await When("je clique sur la fleche en bas à droite", null, { commonPage });
    await Then("le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible", null, { homePage });
  });

  test("Scroll sur la page d'accueil sans la flèche", { tag: ["@browser"] }, async ({ Given, homePage, When, commonPage, Then }) => {
    await Given("je suis sur la page d'accueil", null, { homePage });
    await When("je scrolle jusqu'au footer", null, { commonPage });
    await Then("le texte 'Subscription' is visible", null, { homePage });
    await When("je scrolle jusqu'au header", null, { commonPage });
    await Then("le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible", null, { homePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TS08_scrollUpAndDown.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Création compte pendant la commande": {"pickleLocation":"3:5","tags":["@browser"]},
  "Scroll sur la page d'accueil sans la flèche": {"pickleLocation":"10:5","tags":["@browser"]},
};