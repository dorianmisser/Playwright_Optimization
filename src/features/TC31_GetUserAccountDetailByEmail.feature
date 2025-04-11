@api
Feature: API Products
    Scenario: API 13: GET user account detail by email
        When un appel "GET" vers url "https://automationexercise.com/api/getUserDetailByEmail" avec le paramètre email
        Then le code de la réponse est 200
        And la réponse contient la fiche client
