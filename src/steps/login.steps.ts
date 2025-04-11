import { test, Given, When, Then } from "../fixtures/fixtures";

  When('je saisis des informations de connexion incorrectes', async ({loginPage}) => {
    // saisie d'informations incorrectes
    await loginPage.verifyPresenceOnLoginPage();
    await loginPage.fillKOEmailSignIn();
    await loginPage.fillKOPasswordSignIn();
    await loginPage.clickOnLoginBtn();
  });
  
  Then('je ne suis pas connecté', async ({loginPage}) => {
    await loginPage.verifyPresenceOnLoginPage();
    await loginPage.verifySignInErrorMessage("Your email or password is incorrect!");
    });
  
  When('je me connecte à mon compte', async ({loginPage}) => {
    await loginPage.verifyPresenceOnLoginPage();
    await loginPage.fillEmailSignIn();
    await loginPage.fillPasswordSignIn();
    await loginPage.clickOnLoginBtn();
  });

  When('je me connecte au compte créé', async ({loginPage}) => {
    await loginPage.verifyPresenceOnLoginPage();
    await loginPage.fillRandomEmailSignIn();
    await loginPage.fillRandomPasswordSignIn();
    await loginPage.clickOnLoginBtn();
  });


  Then('je suis connecté au compte créé', async ({homePage}) => {
    await homePage.verifyPresenceOnHomepage();
    await homePage.verifyCreatedAccountConnexion();
  });

  Given('je suis sur la page de login', async ({loginPage}) => {
    await loginPage.navigateToLoginPage();
    await loginPage.verifyPresenceOnLoginPage();
});


      
  
