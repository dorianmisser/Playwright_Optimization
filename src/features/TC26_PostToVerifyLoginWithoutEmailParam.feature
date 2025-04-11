@api
Feature: API Products
    Scenario: POST To Verify Login without email parameter
        When un appel "POST" vers url "https://automationexercise.com/api/verifyLogin" avec le paramètre de connexion "password"
        Then le code de la réponse est 400
        And le message est le suivant : "Bad request, email or password parameter is missing in POST request."
