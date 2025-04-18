import { Given, When, Then, expect } from "../../fixtures/web.fixtures";
import { createRandomUser } from "../../fixtures/randomizer";


Then('je ferme le navigateur', async ({context}) => {
    await context.close();
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