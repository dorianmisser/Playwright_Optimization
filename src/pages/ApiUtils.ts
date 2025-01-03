import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
import { get } from 'http';
import { returnUser } from '../fixtures/randomizer';

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
    const response = await this.apiContext.fetch(url, {
      method,
      headers,
      data: data || undefined,
    });
    if(!response.ok()) {
      throw new Error(`L'appel API a échoué avec le code : ${response.status()}`);
    }
    return response;
  }

  async makeAPICallWithParams(
    url:string,
    method: string,
    form?: { [key: string]: string | number | boolean }
  ) : Promise<APIResponse> {
    const response = await this.apiContext.fetch(url, {
      method,
      form,
    });
    if(!response.ok()) {
      throw new Error(`L'appel API a échoué avec le code : ${response.status()}`);
    }
    return response;
  }

  /**
   * Vérifie le code de la réponse de l'API
   * @param response - La réponse brute de l'API
   * @param expectedStatusCode - Le code attendu.
   */
  async verifyResponseCode(response: APIResponse, expectedStatusCode: number) : Promise<void> {
    const jsonResponse = await response.json();
    const actualStatusCode = await jsonResponse.responseCode;
    try {
    expect(actualStatusCode).toBe(expectedStatusCode);
    } catch(error) {
      throw new Error(`La réponse ne correspond pas voici la réponse obtenue :
        ${jsonResponse.responseCode}
        ${jsonResponse.message}
        `)
    }
  }

  async verifyProductResponseContent(response: APIResponse) : Promise<void> {
    const jsonResponse = await response.json();
    const nbProducts = await jsonResponse.products.length;
    if (nbProducts == 0) {
      throw new Error(`Aucun produit n'a été généré`);
    }
  }
  
  async verifyBrandResponseContent(response: APIResponse) : Promise<void> {
    const jsonResponse = await response.json();
    const actualValue = await jsonResponse.brands.length;
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
  async verifyFirstResponseContent(response: APIResponse, key: string, expectedValue: unknown): Promise<void> {
    const jsonResponse = await response.json();
    const firstProduct = await jsonResponse.products[0];
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
  async verifyResponseText(response: APIResponse, expectedResponseText: string) {
    const jsonResponse = await response.json();
    const responseText = await jsonResponse.message;
    expect(responseText).toBe(expectedResponseText);

  }

  async createAPIResponseJsonFile(response:APIResponse) {
    const jsonResponse = await response.json();
    writeFileSync(
      `C:/Users/Dorian Misser/Documents/Workspace/Playwright_Optimization/src/data/apiResponse.json`,
      JSON.stringify(jsonResponse,null, 2), 
      'utf-8'
  );
  }

  /**
   * Vérifie plusieurs clés et valeurs dans la réponse JSON.
   * @param response - La réponse brute de l'API.
   * @param expectedContent - Un objet contenant les clés et valeurs attendues.
   */
    async verifyResponseContents(response: APIResponse, expectedContent: Record<string, unknown>): Promise<void> {
      const jsonResponse = await response.json();
  
      for (const [key, expectedValue] of Object.entries(expectedContent)) {
        const actualValue = jsonResponse[key];
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
  const response = await this.apiContext.fetch(
    url, 
    {
    method,
    params,
  });
  if(!response.ok()) {
    throw new Error(`L'appel API a échoué avec le code : ${response.status()}`);
  }
  return response;
}

async verifyClientDataReturned(response:APIResponse) {

  try {
  const user = await returnUser();
  const jsonResponse = await response.json();
  const clientData = await jsonResponse.user;
  
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

}