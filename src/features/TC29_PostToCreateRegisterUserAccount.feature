@api
Feature: API Products
    Scenario: API 11: POST To Create/Register User Account
        Given je génère des informations clients randoms
        When un appel "POST" vers url "https://automationexercise.com/api/createAccount" avec les paramètres pour créer un nouveau client
        Then le code de la réponse est 201
        And le message est le suivant : "User created!"
