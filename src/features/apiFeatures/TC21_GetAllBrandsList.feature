@api
Feature: API Products
    Scenario: Get All Brands List
        When un appel 'GET' vers url 'https://automationexercise.com/api/brandsList'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations de marques souhaitées

