@api
Feature: API Products
    Scenario: POST To Search Product
        When un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct' avec le paramètre de recherche 'tshirt'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations produits souhaitées
