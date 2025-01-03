@browser
Feature: Connexion Compte client
    Scenario: Connexion compte client OK
        Given je me rends sur la page de connexion
        When je me connecte à mon compte
        Then je suis connecté à mon compte
        And je ferme le navigateur

    Scenario: Connexion compte client KO
        Given je me rends sur la page de connexion
        When je saisis des informations de connexion incorrectes
        Then je ne suis pas connecté
        And je ferme le navigateur

    Scenario: Deconnexion compte client
        Given je me rends sur la page de connexion
        When je me connecte à mon compte
        Then je suis connecté à mon compte
        When je me deconnecte
        Then je suis deconnecté
        And je ferme le navigateur