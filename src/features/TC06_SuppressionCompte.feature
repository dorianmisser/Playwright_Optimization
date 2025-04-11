@suppresionClient
Feature: Suppression de compte
    Scenario: Suppression d'un compte client
        Given je me rends sur la page de connexion
        When je me connecte au compte créé
        Then je suis connecté au compte créé
        When je supprime le compte créé
        Then le message Account Deleted! apparait
        And je ferme le navigateur