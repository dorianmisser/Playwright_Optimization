@browser
Feature: Produit
    Scenario: Ajout de deux produits au panier
        Given je me rends sur la page des produits
        When j ajoute 2 produit.s dans mon panier
        Then mon panier contient les deux produits selectionnés
        And je ferme le navigateur
