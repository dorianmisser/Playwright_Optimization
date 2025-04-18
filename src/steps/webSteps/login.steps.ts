import { test, Given, When, Then } from "../../fixtures/web.fixtures";
import { createRandomUser, returnFileContent } from "../../fixtures/randomizer";

  When('je saisis des informations de connexion incorrectes', async ({loginPage, apiUtils}) => {
    // saisie d'informations incorrectes
    await loginPage.verifyPresenceOnLoginPage();
    await apiUtils.deleteUserByApi("randomUser");
    await loginPage.fillEmailSignIn("randomUser");
    await loginPage.fillPasswordSignIn("randomUser");
    await loginPage.clickOnLoginBtn();
  });
  
  Then('je ne suis pas connecté', async ({loginPage}) => {
    await loginPage.verifyPresenceOnLoginPage();
    await loginPage.verifySignInErrorMessage("Your email or password is incorrect!");
    });

  When('je me connecte au compte {string}', async ({loginPage, apiUtils}, dataSet: string) => {
    await loginPage.verifyPresenceOnLoginPage();
      if(dataSet === "dodo") {
        await loginPage.fillEmailSignIn("existingUser");
        await loginPage.fillPasswordSignIn("existingUser");
        await loginPage.clickOnLoginBtn();
      } else {
        await apiUtils.createUserByApi(`${dataSet}`);
        await loginPage.fillEmailSignIn(`randomUser`);
        await loginPage.fillPasswordSignIn("randomUser");
        await loginPage.clickOnLoginBtn();
      }
  });
  
  When('je me connecte à mon compte', async ({loginPage, apiUtils}) => {
    await loginPage.verifyPresenceOnLoginPage();
    await apiUtils.createUserByApi("randomUser");
    await loginPage.fillEmailSignIn("randomUser");
    await loginPage.fillPasswordSignIn("randomUser");
    await loginPage.clickOnLoginBtn();
    await apiUtils.deleteUserByApi("randomUser");
  });

  Given('je suis sur la page de login', async ({loginPage}) => {
    await loginPage.navigateToLoginPage();
    await loginPage.verifyPresenceOnLoginPage();
  });
