@browser
Feature: Connexion Compte client
    Scenario: Connexion compte client OK
        Given je me rends sur la page de connexion
        When je me connecte à mon compte
        Then je suis connecté à mon compte
        And je ferme le navigateur