@api
Feature: API Products
    Scenario: POST To All Products List
        When un appel 'POST' vers url 'https://automationexercise.com/api/productsList'
        Then le code de la réponse est 405
        And le message est le suivant : 'This request method is not supported.'
