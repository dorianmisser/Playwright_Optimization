@ajoutClient
Feature: Création Compte client

Background : 
    Scenario: Création d'un compte client
        Given je me rends sur la page de connexion
        When je rempli le pré-formulaire de création avec des identifiants nouveaux
        When je rempli le formulaire de création
        Then un compte client est créé
        And je ferme le navigateur

