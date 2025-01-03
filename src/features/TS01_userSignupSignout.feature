@browser
Feature: Création Compte client
    Scenario: Création d'un compte client
        Given je me rends sur la page de connexion
        And je génère des informations clients randoms
        When je rempli le pré-formulaire de création avec des identifiants nouveaux
        When je rempli le formulaire de création
        Then un compte client est créé
        And je ferme le navigateur
    
    Scenario: Création compte client avec mail existant
        Given je me rends sur la page de connexion
        When je rempli le pré-formulaire de création avec des identifiants existants
        Then je ne peux pas créer de compte
        And je ferme le navigateur
