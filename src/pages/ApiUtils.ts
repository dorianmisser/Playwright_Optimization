import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'fs';
import { createRandomUser, returnUser } from '../fixtures/randomizer';

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
    form?: { [key: string]: string | number | boolean }
  ) : Promise<APIResponse> {
    const response = await this.apiContext.fetch(
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

async verifyClientDataReturned(response) {

  try {
    const user = await returnUser();
    const clientData = await response.user;
  
    expect.soft(clientData.name).toEqual(`${user.name}updated`);
    expect.soft(clientData.email).toEqual(`${user.email}`);
    expect.soft(clientData.title).toEqual(`${user.title}`);
    expect.soft(clientData.birth_day).toEqual(`${user.dayOfBirth}`);
    expect.soft(clientData.birth_month).toEqual(`${user.monthOfBirth}`);
    expect.soft(clientData.birth_year).toEqual(`${user.yearOfBirth}`);
    expect.soft(clientData.first_name).toEqual(`${user.firstName}updated`);
    expect.soft(clientData.last_name).toEqual(`${user.lastName}updated`);
    expect.soft(clientData.company).toEqual(`${user.company}updated`);
    expect.soft(clientData.address1).toEqual(`${user.address1}updated`);
    expect.soft(clientData.address2).toEqual(`${user.address2}updated`);
    expect.soft(clientData.country).toEqual(`${user.country}`);
    expect.soft(clientData.state).toEqual(`${user.state}updated`);
    expect.soft(clientData.city).toEqual(`${user.city}updated`);
    expect.soft(clientData.zipcode).toEqual(`${user.zipCode}updated`);
  } catch(error) {
    throw new Error (`l'erreur est la suivante : ${error}`)
    }
}

  async checkIfUserExist(mail:string, pwd:string) {
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
      console.log(`L'utilisateur est déjà crée`)
    } else {
      console.log(`Aucun compte n'a été trouvé`)
    }
    return response
  }

  async createUserByApi(
    name:string, email: string, password : string, title : string, dayOfBirth : string,
    monthOfBirth: string, yearOfBirth : string, firstName : string, lastName: string, company : string, 
    address1 : string, address2 : string, country : string, zipcode : string, state : string, city : string, 
    mobileNumber : string) {
      const user = await returnUser();
      const response = await this.apiContext.fetch(
        `https://automationexercise.com/api/createAccount`,
        {
          method: `POST`,
          form: {
            name:`${name}`,
            email:`${email}`,
            password:`${password}`,
            title: `${title}`,
            birth_date:`${dayOfBirth}`,
            birth_month:`${monthOfBirth}`,
            birth_year:`${yearOfBirth}`,
            firstname:`${firstName}`,
            lastname:`${lastName}`,
            company:`${company}`,
            address1:`${address1}`,
            address2:`${address2}`,
            country:`${country}`,
            zipcode:`${zipcode}`,
            state:`${state}`,
            city:`${city}`,
            mobile_number:`${mobileNumber}`
      }
    }).then(response => response.json());
    expect(await response.responseCode).toBe(201);
  };

  async deleteUserByApi(mail:string) {
    var response = await this.apiContext.fetch(
      `https://automationexercise.com/api/deleteAccount`,
      {
        method:'DELETE',
        form:{
          email:`${mail}`
        },
      },
    )
    response = await response.json()
    return response

  }

  async deleteJddIfExists(mail:string, pwd:string) {
    var response = await this.checkIfUserExist(mail, pwd);
    if(response.responseCode === 200) {
      response = await this.deleteUserByApi(`${mail}`)
    }
  }

  async createJddIfDoesntExist(mail:string, pwd:string) {
    await createRandomUser();
    const response = await this.checkIfUserExist(`${mail}`, `${pwd}`);
    if (await response.responseCode === 404) {
      const existingUser = await JSON.parse(readFileSync('src/data/existingUser.json', 'utf-8'))
      await this.createUserByApi(
        `${existingUser.name}`,
        `${existingUser.email}`,
        `${existingUser.password}`,
        `${existingUser.title}`,
        `${existingUser.dayOfBirth}`,
        `${existingUser.monthOfBirth}`,
        `${existingUser.yearOfBirth}`,
        `${existingUser.firstName}`,
        `${existingUser.lastName}`,
        `${existingUser.company}`,
        `${existingUser.address1}`,
        `${existingUser.address2}`,
        `${existingUser.country}`,
        `${existingUser.zipCode}`,
        `${existingUser.state}`,
        `${existingUser.city}`,
        `${existingUser.mobileNumber}`,
      )
      console.log(`L'utilisateur n'existait pas donc création d'un utilisateur`)
    }
    return response
    }
  }
