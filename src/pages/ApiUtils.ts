import { APIRequestContext, APIResponse, BrowserContext, expect, Page } from '@playwright/test';
import { writeFileSync } from 'fs';
import { createRandomUser, returnFileContent } from '../fixtures/randomizer';

export class ApiUtils {
  readonly apiContext:APIRequestContext;

  constructor(apiContext:APIRequestContext) {
    this.apiContext = apiContext;
  }

  /**
   * Effectue un appel API.
   * @param url - L'URL de l'API.
   * @param method - La méthode HTTP (GET, POST, PUT, DELETE, etc.).
   * @param data - Le corps de la requête (optionnel).
   * @returns La réponse brute de l'API.
   */
  async makeAPICall(
    url:string,
    method: string,
    headers:Record<string,string>,
    data?: Record<string, unknown>,
  ) : Promise<APIResponse> {
    var response = await this.apiContext.fetch(url, {
      method,
      headers,
      data: data || undefined,
    });
    if(!response.ok()) {
      throw new Error(`L'appel API a échoué avec le code : ${response.status()}`);
    }
    response = await response.json()
    return response;
  }

  async makeAPICallWithParams(
    url:string,
    method: string,
    params?: { [key: string]: string | number | boolean }
  ) : Promise<APIResponse> {
    var response = await this.apiContext.fetch(
      url, 
      {
        method,
        params,
      }).then(response => response.json());
      return response;
  }

  async makeAPICallWithFormBody(
    url:string,
    method: string,
    form?: { [key: string]: string | number | boolean }
  ) : Promise<APIResponse> {
    var response = await this.apiContext.fetch(
      url, 
      {
        method,
        form,
      }).then(response => response.json());
      return response;
  }

  /**
   * Vérifie le code de la réponse de l'API
   * @param response - La réponse brute de l'API
   * @param expectedStatusCode - Le code attendu.
   */
  async verifyResponseCode(response, expectedStatusCode: number) : Promise<void> {
    const actualStatusCode = await response.responseCode;
    try {
      expect(actualStatusCode).toBe(expectedStatusCode);
    } catch(error) {
      throw new Error(`La réponse ne correspond pas voici la réponse obtenue :
        ${actualStatusCode} au lieu du code réponse attendu : ${expectedStatusCode}
        ${response.message}
        `)
    }
  }

  async verifyProductResponseContent(response) : Promise<void> {
    const nbProducts = await response.products.length;
    if (nbProducts == 0) {
      throw new Error(`Aucun produit n'a été généré`);
    }
  }
  
  async verifyBrandResponseContent(response) : Promise<void> {
    const actualValue = await response.brands.length;
    if (actualValue === 0) {
      throw new Error(`Le json ne contient pas de marque dans la réponse.`);
    }
  }
  
  /**
   * Vérifie une clé spécifique et sa valeur dans la réponse JSON.
   * @param response - La réponse brute de l'API.
   * @param key - La clé à vérifier.
   * @param expectedValue - La valeur attendue.
   */
  async verifyFirstResponseContent(response, key: string, expectedValue: unknown): Promise<void> {
    const firstProduct = await response.products[0];
    const actualValue = await firstProduct[key]; 
    if (actualValue === undefined) {
      throw new Error(`La clé ${key} n'existe pas dans la réponse.`);
    }
    expect(actualValue).toBe(expectedValue);
  }

  /**
  * Vérifie le texte de la réponse
  * @param response - la réponse brute de l'API
  * @param expectedResponseText - le texte attendu de la réponse
  */
  async verifyResponseText(response, expectedResponseText: string) {
    const responseText = await response.message;
    expect(responseText).toBe(expectedResponseText);
  }

  async createAPIResponseJsonFile(response:APIResponse) {
    writeFileSync(
      `C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data/apiResponse.json`,
      JSON.stringify(response,null, 2),
      'utf-8'
    );
  }

  /**
   * Vérifie plusieurs clés et valeurs dans la réponse JSON.
   * @param response - La réponse brute de l'API.
   * @param expectedContent - Un objet contenant les clés et valeurs attendues.
   */
    async verifyResponseContents(response, expectedContent: Record<string, unknown>): Promise<void> {
      for (const [key, expectedValue] of Object.entries(expectedContent)) {
        const actualValue = response[key];
        if (actualValue === undefined) {
          throw new Error(`La clé "${key}" n'existe pas dans la réponse.`);
        }
        expect(actualValue).toBe(expectedValue);
      }
    }

/**
   * Effectue un appel API.
   * @param url - L'URL de l'API.
   * @param method - La méthode HTTP (GET, POST, PUT, DELETE, etc.).
   * @param params - Le corps de la requête (optionnel).
   * @returns La réponse brute de l'API.
   */
async makeAPICallWithSearchParam(
  url:string,
  method: string,
  params?: { [key: string]: string | number | boolean },
) : Promise<APIResponse> {
  var response = await this.apiContext.fetch(
    url, 
    {
    method,
    params,
  });
  if(!response.ok()) {
    throw new Error(`L'appel API a échoué avec le code : ${response.status()}`);
  }
  response = await response.json()
  return response;
}

async verifyClientDataReturned(response, dataSetToCompare:string) {
  try {
    const user = await returnFileContent(`${dataSetToCompare}.json`);
    const clientData = await response.user;
    expect.soft(clientData.name).toEqual(`${user.name}`);
    expect.soft(clientData.email).toEqual(`${user.email}`);
    expect.soft(clientData.title).toEqual(`${user.title}`);
    expect.soft(clientData.birth_day).toEqual(`${user.dayOfBirth}`);
    expect.soft(clientData.birth_month).toEqual(`${user.monthOfBirth}`);
    expect.soft(clientData.birth_year).toEqual(`${user.yearOfBirth}`);
    expect.soft(clientData.first_name).toEqual(`${user.firstName}`);
    expect.soft(clientData.last_name).toEqual(`${user.lastName}`);
    expect.soft(clientData.company).toEqual(`${user.company}`);
    expect.soft(clientData.address1).toEqual(`${user.address1}`);
    expect.soft(clientData.address2).toEqual(`${user.address2}`);
    expect.soft(clientData.country).toEqual(`${user.country}`);
    expect.soft(clientData.state).toEqual(`${user.state}`);
    expect.soft(clientData.city).toEqual(`${user.city}`);
    expect.soft(clientData.zipcode).toEqual(`${user.zipCode}`);
  } catch(error) {
    throw new Error (`l'erreur est la suivante : ${error}`)
    }
}

  async checkIfUserExist(mail:any, pwd:any) {
    var response = await this.apiContext.fetch(
      `https://automationexercise.com/api/verifyLogin`,
      {
        method : `POST`,
        form: {
          email: `${mail}`,
          password: `${pwd}`
        }
      }
    ).then(response => response.json())
    if (response.responseCode === 200) {
    } else {
    }
    return response
  }

  async createUserByApi(dataSet:string) {
    const user = await returnFileContent(`${dataSet}User.json`);
    const response = await this.apiContext.fetch(
      `https://automationexercise.com/api/createAccount`,
      {
        method: `POST`,
        form: {
          name:`${user.name}`,
          email:`${user.email}`,
          password:`${user.password}`,
          title: `${user.title}`,
          birth_date:`${user.dayOfBirth}`,
          birth_month:`${user.monthOfBirth}`,
          birth_year:`${user.yearOfBirth}`,
          firstname:`${user.firstName}`,
          lastname:`${user.lastName}`,
          company:`${user.company}`,
          address1:`${user.address1}`,
          address2:`${user.address2}`,
          country:`${user.country}`,
          zipcode:`${user.zipcode}`,
          state:`${user.state}`,
          city:`${user.city}`,
          mobile_number:`${user.mobileNumber}`
      }
  }).then(response => response.json());
    expect(await response.responseCode).toBe(201);
  };

  async deleteUserByApi(dataSet:string) {
    var user = await returnFileContent(`${dataSet}.json`);
    var response = await this.apiContext.fetch(
      `https://automationexercise.com/api/deleteAccount`,
      {
        method:'DELETE',
        form:{
          email:`${user.email}`,
          password:`${user.password}`
        },
      },
    )
    response = await response.json();
    return response
  }

  async deleteJddIfExists(mail:string, pwd :string) {
    var response = await this.checkIfUserExist(mail, pwd);
    if(response.responseCode === 200) {
      response = await this.deleteUserByApi('randomUser')
    }
  }

  async createJddIfDoesntExist(mail:string, pwd:string) {
    const response = await this.checkIfUserExist(`${mail}`, `${pwd}`);
    if (await response.responseCode === 404) {
      const existingUser = returnFileContent('existingUser.json');
        await this.createUserByApi(`${existingUser}`);
    }
    return response
  }
}
