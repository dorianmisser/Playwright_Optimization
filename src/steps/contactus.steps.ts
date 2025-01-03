import { test, Given, When, Then } from "../fixtures/fixtures";

When('je rempli le formulaire de contact', async ({homePage, contactUsPage}) => {
  await homePage.clickOnContactUsBtn();
  await contactUsPage.verifyPresenceOnContactUsPage();
  await contactUsPage.fillNameInput();
  await contactUsPage.fillEmailInput();
  await contactUsPage.fillRequestInput();
  await contactUsPage.fillMessageInput();
  await contactUsPage.uploadFile();
  await contactUsPage.clickOnSubmit();
});

Then('le message Success! Your details have been submitted successfully. apparait', async ({contactUsPage, homePage}) => {
  await contactUsPage.verifyPresenceOnContactUsPage();
  await contactUsPage.verifyMessageOnSubmit();
  await contactUsPage.clickOnHomeBtn();
  await homePage.verifyPresenceOnHomepage();
});