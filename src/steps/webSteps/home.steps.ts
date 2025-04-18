import { test, Given, When, Then, expect } from "../../fixtures/web.fixtures";

Given('je me rends sur la page de connexion', async({homePage}) => {
    //Cliquer sur le bouton [Signup / Login] dans le menu du header
    // await homePage.navigateToHomepage();
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnSignupSigninBtn();
  });
  
  When('je me deconnecte', async ({homePage}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnLogoutBtn();
  });
      
  Then('je suis deconnecté', async ({homePage}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.verifyDeconnect();
  });

  Given('je me rends sur la page des produits', async ({homePage}) => {
    await homePage.navigateToHomepage();
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnProductsBtn();
  });

  When('je me rends sur la page du panier', async ({homePage, page}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnCartBtn();
  });

  Given('je clique sur le bouton contact us', async ({homePage}) => {
    await homePage.navigateToHomepage();
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnContactUsBtn();
  });

  Then('je suis connecté au compte {string}', async ({homePage}, dataSet: string) => {
    await homePage.verifyPresenceOnHomepage();
    if (dataSet === "dodo") {
      await homePage.verifyAccountConnexion("existingUser");
    } else {
      await homePage.verifyAccountConnexion("randomUser");
    }
  });

  Then('je suis connecté avec le compte créé', async ({homePage}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.verifyAccountConnexion("existingUser");
  });

  When('je supprime le compte créé', async ({homePage}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.clickOnDeleteAccount();
  });

  Then('le message Account Deleted! apparait', async ({homePage}) => {
    await homePage.verifyDeleteAccountMessage("Account Deleted!");
    await homePage.clickOnContinuebtn();
  });

  Given(`je suis sur la page d'accueil`, async ({homePage}) => {
    await homePage.navigateToHomepage();
    await homePage.verifyPresenceOnHomepage();
  });

  When(`je scrolle jusqu'au footer`, async ({commonPage}) => {
    await commonPage.scrollManuallyToPageFooter();
  });

  Then('le texte {string} is visible', async ({homePage}, expectedText: string) => {
    await homePage.verifyPresenceOnTheBottomPage(expectedText);
  });

  When('je clique sur la fleche en bas à droite', async ({commonPage}) => {
    await commonPage.clickOnScrollUpArrow();
  });

  Then('le header est affiché et le texte {string} est visible', async ({homePage}, expectedText: string) => {
    await homePage.verifyPresenceOnTheTopPage(expectedText);
  });

  When(`je scrolle jusqu'au header`, async ({commonPage}) => {
    await commonPage.scrollManuallyToPageHeader();
  });

  Then('le footer est affiché et le texte {string} est visible', async ({homePage}, expectedText: string) => {
    await homePage.verifyPresenceOnTheBottomPage(expectedText);
  });

  When(`je vérifie que la page correspond à l'attendu`, async ({page}) => {
    const snapshot = await page.locator('body').ariaSnapshot();
  });
