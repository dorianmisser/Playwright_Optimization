/** Generated from: src\features\webFeatures\TC16_ScrollAvecFleche.feature */
import { test } from "../../../../src/fixtures/web.fixtures.ts";

test.describe("Scrolling", () => {

  test("Scroll sur la page d'accueil via la flèche", { tag: ["@browser"] }, async ({ Given, homePage, When, commonPage, Then }) => {
    await Given("je suis sur la page d'accueil", null, { homePage });
    await When("je scrolle jusqu'au footer", null, { commonPage });
    await Then("le texte 'Subscription' is visible", null, { homePage });
    await When("je clique sur la fleche en bas à droite", null, { commonPage });
    await Then("le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible", null, { homePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\webFeatures\\TC16_ScrollAvecFleche.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Scroll sur la page d'accueil via la flèche": {"pickleLocation":"3:5","tags":["@browser"]},
};