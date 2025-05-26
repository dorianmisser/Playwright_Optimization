// fixtures/api.fixtures.ts
import { request } from '@playwright/test';
import { ApiUtils } from '../pages/ApiUtils';
import { test as base, createBdd, cucumberReporter } from 'playwright-bdd';
import { createRandomUser } from './randomizer';

// Typage personnalisé
type APIFixtures = {
  apiUtils: ApiUtils;
};

export const test = base.extend<APIFixtures>({
  apiUtils: async ({ }, use) => {
    await createRandomUser();
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext);
    await use(apiUtils);
    await apiContext.dispose();
  }
});

export { expect } from '@playwright/test';
export const { Given, When, Then } = createBdd(test);
