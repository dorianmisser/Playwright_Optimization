import { APIResponse } from "@playwright/test";
import { Then, When } from "../fixtures/fixtures";
import { returnUser } from "../fixtures/randomizer";

export var response:APIResponse;

  When('un appel {string} vers url {string}', async ({apiUtils}, method: string, url: string) => {
    response = await apiUtils.makeAPICall(url,method,{'Content-Type':'application/json'});
    await apiUtils.createAPIResponseJsonFile(response);
  });

  Then('le code de la réponse est {int}', async ({apiUtils}, expectedResponseCode: number) => {
      await apiUtils.verifyResponseCode(response, expectedResponseCode);
  });

  Then(`la réponse doit contenir les informations produits souhaitées`, async({apiUtils}) => {
      await apiUtils.verifyProductResponseContent(response);
  });


  Then('la réponse doit contenir les informations de marques souhaitées', async ({apiUtils}) => {
      await apiUtils.verifyBrandResponseContent(response)
  });

  Then('le message est le suivant : {string}', async ({apiUtils}, messageExpected: string) => {
    await apiUtils.verifyResponseText(response, messageExpected);
  });

  When('un appel {string} vers url {string} avec le paramètre de recherche {string}', async({apiUtils}, requestMethod:string, url:string, searchparameter:string) => {
      response = await apiUtils.makeAPICallWithParams(
        url,
        requestMethod,
        {search_product:searchparameter},
      );
      await apiUtils.createAPIResponseJsonFile(response);
  });

  When('un appel {string} vers url {string} avec les paramètres de connexion {string} et {string}', async({apiUtils}, requestMethod:string, url:string, mail: string, password: string) => {
    await apiUtils.deleteJddIfExists(mail, password)
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

  When('un appel {string} vers url {string} avec le paramètre de connexion {string}', async ({apiUtils}, requestMethod: string, url: string, mdp: string) => {
    response = await apiUtils.makeAPICallWithParams(
      url,
      requestMethod,
      {password:mdp}
    )
    await apiUtils.createAPIResponseJsonFile(response);
  });

  When('un appel {string} vers url {string} avec les paramètres pour créer un nouveau client', async ({apiUtils, }, requestMethod: string, url: string) => {
    const user = await returnUser();
    apiUtils.deleteJddIfExists(`${user.email}`, `${user.password}`)
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
    
  When('un appel {string} vers url {string} avec les paramètres pour mettre à jour une fiche client', async ({apiUtils}, requestMethod: string, url: string) => {
    const user = await returnUser();
    apiUtils.createJddIfDoesntExist(`${user.email}`, `${user.password}`)
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

  When('un appel {string} vers url {string} avec les paramètres pour supprimer une fiche client', async ({apiUtils}, requestMethod: string, url: string) => {
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

  When('un appel {string} vers url {string} avec le paramètre email', async ({apiUtils}, requestMethod: string, url: string) => {
    const user = await returnUser();
    var response = await apiUtils.makeAPICallWithSearchParam(
      url,
      requestMethod,
      {email:user.email}
    )
    await apiUtils.createAPIResponseJsonFile(response);
  });

  Then('la réponse contient la fiche client', async ({apiUtils}) => {
    await apiUtils.verifyClientDataReturned(response)
  });