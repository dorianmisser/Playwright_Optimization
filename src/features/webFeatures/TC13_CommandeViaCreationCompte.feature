@browser
Feature: Tunnel de commande
    Scenario: Création compte pendant la commande
        Given je me rends sur la page des produits
        When j ajoute 1 produit.s dans mon panier
        And je clique sur Proceed To Checkout et sur le bouton RegisterLogin
        And je rempli le pré-formulaire de création avec des identifiants nouveaux
        And je rempli le formulaire de création
        Then un compte client est créé
        When je me rends sur la page du panier
        When je procède à la commande
        Then ma commande est réalisée
        And je ferme le navigateur