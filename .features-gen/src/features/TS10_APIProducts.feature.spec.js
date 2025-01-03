/** Generated from: src\features\TS10_APIProducts.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("API Products", () => {

  test("API 1 : Get All Products List", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel 'GET' vers url 'https://automationexercise.com/api/productsList'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("la réponse doit contenir les informations produits souhaitées", null, { apiContext, apiUtils });
  });

  test("API 2 : POST To All Products List", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/productsList'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 405", null, { apiContext, apiUtils });
    await And("le message est le suivant : 'This request method is not supported.'", null, { apiContext, apiUtils });
  });

  test("API 3: Get All Brands List", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel 'GET' vers url 'https://automationexercise.com/api/brandsList'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("la réponse doit contenir les informations de marques souhaitées", null, { apiContext, apiUtils });
  });

  test("API 4: PUT To All Brands List", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"PUT\" vers url 'https://automationexercise.com/api/brandsList'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 405", null, { apiContext, apiUtils });
    await And("le message est le suivant : 'This request method is not supported.'", null, { apiContext, apiUtils });
  });

  test("API 5: POST To Search Product", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct' avec le paramètre de recherche 'tshirt'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("la réponse doit contenir les informations produits souhaitées", null, { apiContext, apiUtils });
  });

  test("API 6: POST To Search Product without search_product parameter", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct'", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 400", null, { apiContext, apiUtils });
    await And("le message est le suivant : 'Bad request, search_product parameter is missing in POST request.'", null, { apiContext, apiUtils });
  });

  test("API 7 : POST To Verify Login with valid details", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url 'https://automationexercise.com/api/verifyLogin' avec les paramètres de connexion \"dodo@yopmail.com\" et \"password\"", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("le message est le suivant : 'User exists!'", null, { apiContext, apiUtils });
  });

  test("API 8: POST To Verify Login without email parameter", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/verifyLogin\" avec le paramètre de connexion \"password\"", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 400", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"Bad request, email or password parameter is missing in POST request.\"", null, { apiContext, apiUtils });
  });

  test("API 9: DELETE To Verify Login", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"DELETE\" vers url \"https://automationexercise.com/api/verifyLogin\"", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 405", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"This request method is not supported.\"", null, { apiContext, apiUtils });
  });

  test("API 10: POST To Verify Login with invalid details", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/verifyLogin\" avec les paramètres de connexion \"dodoKO@yopmail.com\" et \"passwordKO\"", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 404", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"User not found!\"", null, { apiContext, apiUtils });
  });

  test("API 11: POST To Create/Register User Account", { tag: ["@api"] }, async ({ Given, When, apiContext, apiUtils, Then, And }) => {
    await Given("je génère des informations clients randoms");
    await When("un appel \"POST\" vers url \"https://automationexercise.com/api/createAccount\" avec les paramètres pour créer un nouveau client", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 201", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"User created!\"", null, { apiContext, apiUtils });
  });

  test("API 12: PUT METHOD To Update User Account", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"PUT\" vers url \"https://automationexercise.com/api/updateAccount\" avec les paramètres pour mettre à jour une fiche client", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"User updated!\"", null, { apiContext, apiUtils });
  });

  test("API 13: GET user account detail by email", { tag: ["@api"] }, async ({ When, apiUtils, apiContext, Then, And }) => {
    await When("un appel \"GET\" vers url \"https://automationexercise.com/api/getUserDetailByEmail\" avec le paramètre email", null, { apiUtils, apiContext });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("la réponse contient la fiche client", null, { apiContext, apiUtils });
  });

  test("API 14: DELETE METHOD To Delete User Account", { tag: ["@api"] }, async ({ When, apiContext, apiUtils, Then, And }) => {
    await When("un appel \"DELETE\" vers url \"https://automationexercise.com/api/deleteAccount\" avec les paramètres pour supprimer une fiche client", null, { apiContext, apiUtils });
    await Then("le code de la réponse est 200", null, { apiContext, apiUtils });
    await And("le message est le suivant : \"Account deleted!\"", null, { apiContext, apiUtils });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\features\\TS10_APIProducts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "API 1 : Get All Products List": {"pickleLocation":"3:5","tags":["@api"]},
  "API 2 : POST To All Products List": {"pickleLocation":"8:5","tags":["@api"]},
  "API 3: Get All Brands List": {"pickleLocation":"13:5","tags":["@api"]},
  "API 4: PUT To All Brands List": {"pickleLocation":"18:5","tags":["@api"]},
  "API 5: POST To Search Product": {"pickleLocation":"23:5","tags":["@api"]},
  "API 6: POST To Search Product without search_product parameter": {"pickleLocation":"28:5","tags":["@api"]},
  "API 7 : POST To Verify Login with valid details": {"pickleLocation":"33:5","tags":["@api"]},
  "API 8: POST To Verify Login without email parameter": {"pickleLocation":"38:5","tags":["@api"]},
  "API 9: DELETE To Verify Login": {"pickleLocation":"43:5","tags":["@api"]},
  "API 10: POST To Verify Login with invalid details": {"pickleLocation":"48:5","tags":["@api"]},
  "API 11: POST To Create/Register User Account": {"pickleLocation":"53:5","tags":["@api"]},
  "API 12: PUT METHOD To Update User Account": {"pickleLocation":"59:5","tags":["@api"]},
  "API 13: GET user account detail by email": {"pickleLocation":"64:5","tags":["@api"]},
  "API 14: DELETE METHOD To Delete User Account": {"pickleLocation":"69:5","tags":["@api"]},
};