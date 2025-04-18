@api
Feature: API Products
    Scenario: DELETE To Verify Login
        When un appel "DELETE" vers url "https://automationexercise.com/api/verifyLogin"
        Then le code de la réponse est 405
        And le message est le suivant : "This request method is not supported."
