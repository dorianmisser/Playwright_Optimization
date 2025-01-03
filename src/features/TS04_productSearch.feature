@browser
Feature: Produit
    Scenario: Recherche d'un produit
        Given je me rends sur la page des produits
        When je saisis "Top" dans la barre de recherche
        Then la liste des résultats correspond bien à la recherche
        And je ferme le navigateur

    Scenario: Affichage de la liste des produits
        Given je me rends sur la page des produits
        When je clique sur le détail des produits
        Then les éléments du produits sont visible
        And je ferme le navigateur

    Scenario: Redaction d'un commentaire sur un produit
        Given je me rends sur la page des produits
        When je clique sur le détail des produits
        And je rédige un commentaire
        Then le message Thank you for your review. apparait
        And je ferme le navigateur
