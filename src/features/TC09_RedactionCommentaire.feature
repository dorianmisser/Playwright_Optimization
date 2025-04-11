@browser
Feature: Produit
    Scenario: Redaction d'un commentaire sur un produit
        Given je me rends sur la page des produits
        When je clique sur le détail des produits
        And je rédige un commentaire
        Then le message Thank you for your review. apparait
        And je ferme le navigateur
