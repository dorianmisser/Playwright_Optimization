@api
Feature: API Products
    Scenario: Get All Products List
        When un appel 'GET' vers url 'https://automationexercise.com/api/productsList'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations produits souhaitées