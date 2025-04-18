@browser
Feature: Connexion Compte client
    Scenario: Connexion compte client OK
        Given je me rends sur la page de connexion
        When je me connecte au compte "dodo"
        Then je suis connecté au compte "dodo"
        And je ferme le navigateur