@browser
Feature: Produit
    Scenario: Recherche d'un produit
        Given je me rends sur la page des produits
        When je saisis "Top" dans la barre de recherche
        Then la liste des résultats correspond bien à la recherche
        And je ferme le navigateur
