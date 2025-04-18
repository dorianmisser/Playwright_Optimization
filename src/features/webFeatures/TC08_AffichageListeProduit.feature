@browser
Feature: Produit
    Scenario: Affichage de la liste des produits
        Given je me rends sur la page des produits
        When je clique sur le détail des produits
        Then les éléments du produits sont visible
        And je ferme le navigateur
