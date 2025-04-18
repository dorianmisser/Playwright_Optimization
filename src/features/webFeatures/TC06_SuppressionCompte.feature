@suppresionClient
Feature: Suppression de compte
    Scenario: Suppression d'un compte client
        Given je me rends sur la page de connexion
        When je me connecte au compte "random"
        Then je suis connecté au compte "random"
        When je supprime le compte créé
        Then le message Account Deleted! apparait
        And je ferme le navigateur