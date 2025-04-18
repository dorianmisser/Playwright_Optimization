@api
Feature: API Products
    Scenario: POST To Verify Login with invalid details
        When un appel "POST" vers url "https://automationexercise.com/api/verifyLogin" avec les paramètres de connexion "dodoKO@yopmail.com" et "passwordKO"
        Then le code de la réponse est 404
        And le message est le suivant : "User not found!"
