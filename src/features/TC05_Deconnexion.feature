@browser
Feature: Connexion Compte client
    Scenario: Deconnexion compte client
        Given je me rends sur la page de connexion
        When je me connecte à mon compte
        Then je suis connecté à mon compte
        When je me deconnecte
        Then je suis deconnecté
        And je ferme le navigateur