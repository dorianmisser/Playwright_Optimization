@browser
Feature: Connexion Compte client
    Scenario: Deconnexion compte client
        Given je me rends sur la page de connexion
        When je me connecte au compte "dodo"
        Then je suis connecté au compte "dodo"
        When je me deconnecte
        Then je suis deconnecté
        And je ferme le navigateur