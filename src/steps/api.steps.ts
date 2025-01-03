import { APIResponse } from "@playwright/test";
import { test, Then, When } from "../fixtures/fixtures";
import { ApiUtils } from "../pages/ApiUtils";
import { returnUser } from "../fixtures/randomizer";

export var response:APIResponse;

When('un appel {string} vers url {string}', async ({apiContext, apiUtils}, method: string, url: string) => {
    response = await apiUtils.makeAPICall(url,method,{'Content-Type':'application/json'});
    await apiUtils.createAPIResponseJsonFile(response);
});

Then('le code de la réponse est {int}', async ({apiContext, apiUtils}, expectedResponseCode: number) => {
    await apiUtils.verifyResponseCode(response, expectedResponseCode);
});

Then(`la réponse doit contenir les informations produits souhaitées`, async({apiContext,apiUtils}) => {
    await apiUtils.verifyProductResponseContent(response);
});

Then('la réponse doit contenir les informations login souhaitées', async ({apiContext, apiUtils}) => {
    // await apiUtils.veri(response)
});

Then('la réponse doit contenir les informations de marques souhaitées', async ({apiContext, apiUtils}) => {
    await apiUtils.verifyBrandResponseContent(response)
});

Then('le message est le suivant : {string}', async ({apiContext, apiUtils}, messageExpected: string) => {
  await apiUtils.verifyResponseText(response, messageExpected);
});

When('un appel {string} vers url {string} avec le paramètre de recherche {string}', async({apiContext, apiUtils}, requestMethod:string, url:string, searchparameter:string) => {
    response = await apiUtils.makeAPICallWithParams(
      url,
      requestMethod,
      {search_product:searchparameter},
    );
    await apiUtils.createAPIResponseJsonFile(response);

});

When('un appel {string} vers url {string} avec les paramètres de connexion {string} et {string}', async({apiContext, apiUtils}, requestMethod:string, url:string, mail: string, password: string) => {
  response = await apiUtils.makeAPICallWithParams(
    url,
    requestMethod,
    {
      email:mail,
      password:password
    }
  )
  await apiUtils.createAPIResponseJsonFile(response);
});

When('un appel {string} vers url {string} avec le paramètre de connexion {string}', async ({apiContext, apiUtils}, requestMethod: string, url: string, mdp: string) => {
  response = await apiUtils.makeAPICallWithParams(
    url,
    requestMethod,
    {password:mdp}
  )
  await apiUtils.createAPIResponseJsonFile(response);
});

When('un appel {string} vers url {string} avec les paramètres pour créer un nouveau client', async ({apiContext, apiUtils, }, requestMethod: string, url: string) => {
  const user = await returnUser();
  response = await apiUtils.makeAPICallWithParams(
    url,
    requestMethod,
    {
      name:`${user.name}`,
      email:`${user.email}`,
      password:`${user.password}`,
      title: `${user.password}`,
      birth_date:`${user.dayOfBirth}`,
      birth_month:`${user.monthOfBirth}`,
      birth_year:`${user.yearOfBirth}`,
      firstname:`${user.firstName}`,
      lastname:`${user.lastName}`,
      company:`${user.company}`,
      address1:`${user.address1}`,
      address2:`${user.address2}`,
      country:`${user.country}`,
      zipcode:`${user.zipCode}`,
      state:`${user.state}`,
      city:`${user.city}`,
      mobile_number:`${user.mobileNumber}`
    }
  );
  await apiUtils.createAPIResponseJsonFile(response);
});
  
  
When('un appel {string} vers url {string} avec les paramètres pour mettre à jour une fiche client', async ({apiContext, apiUtils}, requestMethod: string, url: string) => {
  const user = await returnUser();
  response = await apiUtils.makeAPICallWithParams(
    url,
    requestMethod,
    {
      email:`${user.email}`,
      password:`${user.password}`,
      name:`${user.name}updated`,
      title:`${user.title}`,
      birth_date:`${user.dayOfBirth}`,
      birth_month:`${user.monthOfBirth}`,
      birth_year:`${user.yearOfBirth}`,
      firstname:`${user.firstName}updated`,
      lastname:`${user.lastName}updated`,
      company:`${user.company}updated`,
      address1:`${user.address1}updated`,
      address2:`${user.address2}updated`,
      country:`United States`,
      zipcode:`${user.zipCode}updated`,
      state:`${user.state}updated`,
      city:`${user.city}updated`,
      mobile_number:`${user.mobileNumber}updated`
    }
  )
  await apiUtils.createAPIResponseJsonFile(response)
});

When('un appel {string} vers url {string} avec les paramètres pour supprimer une fiche client', async ({apiContext, apiUtils}, requestMethod: string, url: string) => {
  const user = await returnUser()
  response = await apiUtils.makeAPICallWithParams(
    url,
    requestMethod,
    {
      name: `${user.name}`,
      firstname: `${user.firstName}`,
      email:`${user.email}`,
      password:`${user.password}`
    }
  )
  await apiUtils.createAPIResponseJsonFile(response);
});

When('un appel {string} vers url {string} avec le paramètre email', async ({apiUtils, apiContext}, requestMethod: string, url: string) => {
  const user = await returnUser();
  response = await apiUtils.makeAPICallWithSearchParam(
    url,
    requestMethod,
    {email:user.email}
  )
  await apiUtils.createAPIResponseJsonFile(response);
});

Then('la réponse contient la fiche client', async ({apiContext, apiUtils}) => {
  await apiUtils.verifyClientDataReturned(response)

});