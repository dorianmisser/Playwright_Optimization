@browser
Feature: Connexion Compte client
    Scenario: Connexion compte client KO
        Given je me rends sur la page de connexion
        When je saisis des informations de connexion incorrectes
        Then je ne suis pas connecté
        And je ferme le navigateur