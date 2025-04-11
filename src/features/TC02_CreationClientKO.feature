@ajoutClientKO
Feature: Création Compte client
    Scenario: Création compte client avec mail existant
        Given je me rends sur la page de connexion
        When je rempli le pré-formulaire de création avec des identifiants existants
        Then je ne peux pas créer de compte
        And je ferme le navigateur
