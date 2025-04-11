@api
Feature: API Products
    Scenario: API 12: PUT METHOD To Update User Account
        When un appel "PUT" vers url "https://automationexercise.com/api/updateAccount" avec les paramètres pour mettre à jour une fiche client
        Then le code de la réponse est 200
        And le message est le suivant : "User updated!"
