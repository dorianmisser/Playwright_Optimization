import { test } from "./fixtures/fixtures.ts";

    test("Connexion compte client", async ({page, homePage, loginPage }) => {
        homePage.navigateToHomepage();
        homePage.clickOnSignupSigninBtn();
        loginPage.login("dodo.test@yopmail.com", "password");
      });
