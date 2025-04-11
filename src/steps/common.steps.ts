import { Given, When, Then, expect } from "../fixtures/fixtures";
import { createRandomUser } from "../fixtures/randomizer";

Given('la génération d\'un JDD', async () => {
    await createRandomUser();
  });

Then('je ferme le navigateur', async ({context}) => {
    await context.close();
});

// 1. Missing step definition for "src\features\TS01_userSignupSignout.feature:5:9"
Given('je génère des informations clients randoms', async () => {
  await createRandomUser();
});

When('je teste ma méthode', async ({apiUtils }) => {
  const response = await apiUtils.makeAPICallWithSearchParam(
    `https://automationexercise.com/api/getUserDetailByEmail`,
    'GET',
    {
      email:'dodo@yopmail.com',
    }
  )
  await apiUtils.createAPIResponseJsonFile(response)
});