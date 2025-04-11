@api
Feature: API Products
    Scenario: POST To Verify Login with valid details
        When un appel "POST" vers url 'https://automationexercise.com/api/verifyLogin' avec les paramètres de connexion "dodo.test@yopmail.com" et "password"
        Then le code de la réponse est 200
        And le message est le suivant : 'User exists!'
