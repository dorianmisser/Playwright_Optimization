@api
Feature: API Products
    Scenario: PUT To All Brands List
        When un appel "PUT" vers url 'https://automationexercise.com/api/brandsList'
        Then le code de la réponse est 405
        And le message est le suivant : 'This request method is not supported.'
