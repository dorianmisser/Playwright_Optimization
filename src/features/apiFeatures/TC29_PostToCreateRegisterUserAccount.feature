@api
Feature: API Products
    Scenario: POST To Create/Register User Account
        When un appel "POST" vers url "https://automationexercise.com/api/createAccount" avec les paramètres pour créer un nouveau client
        Then le code de la réponse est 201
        And le message est le suivant : "User created!"
