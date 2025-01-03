@api
Feature: API Products
    Scenario: API 1 : Get All Products List
        When un appel 'GET' vers url 'https://automationexercise.com/api/productsList'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations produits souhaitées

    Scenario: API 2 : POST To All Products List
        When un appel 'POST' vers url 'https://automationexercise.com/api/productsList'
        Then le code de la réponse est 405
        And le message est le suivant : 'This request method is not supported.'

    Scenario: API 3: Get All Brands List
        When un appel 'GET' vers url 'https://automationexercise.com/api/brandsList'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations de marques souhaitées

    Scenario: API 4: PUT To All Brands List
        When un appel "PUT" vers url 'https://automationexercise.com/api/brandsList'
        Then le code de la réponse est 405
        And le message est le suivant : 'This request method is not supported.'

    Scenario: API 5: POST To Search Product
        When un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct' avec le paramètre de recherche 'tshirt'
        Then le code de la réponse est 200
        And la réponse doit contenir les informations produits souhaitées

    Scenario: API 6: POST To Search Product without search_product parameter
        When un appel 'POST' vers url 'https://automationexercise.com/api/searchProduct'
        Then le code de la réponse est 400
        And le message est le suivant : 'Bad request, search_product parameter is missing in POST request.'

    Scenario: API 7 : POST To Verify Login with valid details
        When un appel "POST" vers url 'https://automationexercise.com/api/verifyLogin' avec les paramètres de connexion "dodo@yopmail.com" et "password"
        Then le code de la réponse est 200
        And le message est le suivant : 'User exists!'

    Scenario: API 8: POST To Verify Login without email parameter
        When un appel "POST" vers url "https://automationexercise.com/api/verifyLogin" avec le paramètre de connexion "password"
        Then le code de la réponse est 400
        And le message est le suivant : "Bad request, email or password parameter is missing in POST request."

    Scenario: API 9: DELETE To Verify Login
        When un appel "DELETE" vers url "https://automationexercise.com/api/verifyLogin"
        Then le code de la réponse est 405
        And le message est le suivant : "This request method is not supported."

    Scenario: API 10: POST To Verify Login with invalid details
        When un appel "POST" vers url "https://automationexercise.com/api/verifyLogin" avec les paramètres de connexion "dodoKO@yopmail.com" et "passwordKO"
        Then le code de la réponse est 404
        And le message est le suivant : "User not found!"

    Scenario: API 11: POST To Create/Register User Account
        Given je génère des informations clients randoms
        When un appel "POST" vers url "https://automationexercise.com/api/createAccount" avec les paramètres pour créer un nouveau client
        Then le code de la réponse est 201
        And le message est le suivant : "User created!"

    Scenario: API 12: PUT METHOD To Update User Account
        When un appel "PUT" vers url "https://automationexercise.com/api/updateAccount" avec les paramètres pour mettre à jour une fiche client
        Then le code de la réponse est 200
        And le message est le suivant : "User updated!"

    Scenario: API 13: GET user account detail by email
        When un appel "GET" vers url "https://automationexercise.com/api/getUserDetailByEmail" avec le paramètre email
        Then le code de la réponse est 200
        And la réponse contient la fiche client

    Scenario: API 14: DELETE METHOD To Delete User Account
        When un appel "DELETE" vers url "https://automationexercise.com/api/deleteAccount" avec les paramètres pour supprimer une fiche client
        Then le code de la réponse est 200
        And le message est le suivant : "Account deleted!"


