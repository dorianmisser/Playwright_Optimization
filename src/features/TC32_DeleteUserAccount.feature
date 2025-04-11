@api
Feature: API Products
    Scenario: API 14: DELETE METHOD To Delete User Account
        When un appel "DELETE" vers url "https://automationexercise.com/api/deleteAccount" avec les paramètres pour supprimer une fiche client
        Then le code de la réponse est 200
        And le message est le suivant : "Account deleted!"
