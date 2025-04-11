@api
Feature: API Products
    Scenario: POST To Search Product without search_product parameter
        When un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct'
        Then le code de la réponse est 400
        And le message est le suivant : 'Bad request, search_product parameter is missing in POST request.'

