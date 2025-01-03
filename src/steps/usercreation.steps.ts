import { test, Given, When, Then } from "../fixtures/fixtures";

When('je rempli le pré-formulaire de création avec des identifiants existants', async ({loginPage}) => {
  await loginPage.verifyPresenceOnLoginPage();
  // Remplissage des champs "name" et "email" avec des identifiants d'un compte déjà crée 
  await loginPage.fillNameSignUp();
  await loginPage.fillEmailSignUp();
  await loginPage.clickOnSignupBtn();
});

When('je rempli le pré-formulaire de création avec des identifiants nouveaux', async ({loginPage}) => {
  // je saisi mes informations login/mail pour créer un compte
  await loginPage.verifyPresenceOnLoginPage();
  await loginPage.fillNameSignUp();
  await loginPage.fillEmailSignUp();
  await loginPage.clickOnSignupBtn();
  });

When('je rempli le formulaire de création', async ({userCreationPage}) => {
  await userCreationPage.verifyPresenceOnUserCreationPage();
    // selection du genre
    // await page.locator("css=#id_gender1").check();
  await userCreationPage.fillCreateAccountForm();
  await userCreationPage.validateForm();
  });

Then('je ne peux pas créer de compte', async ({loginPage}) => {
  await loginPage.verifyPresenceOnLoginPage();
  await loginPage.verifySignUpErrorMessage(`Email Address already exist!`);
});
  
Then('un compte client est créé', async ({userCreationPage, homePage}) => {
  await userCreationPage.verifyAccountCreatedMessage();
  await userCreationPage.clickOnContinueButton();
  await homePage.verifyPresenceOnHomepage();
  await homePage.verifyCreatedAccountConnexion();
    });