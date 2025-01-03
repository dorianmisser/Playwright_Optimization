@browser
Feature: Produit
    Scenario: Ajout de deux produits au panier
        Given je me rends sur la page des produits
        When j ajoute 2 produit.s dans mon panier
        Then mon panier contient les deux produits selectionnés
        And je ferme le navigateur

    Scenario: Vérification de la quantité dans le panier
        Given je me rends sur la page du détail d'un produit
        When je choisi la quantité suivante : 4 et j ajoute au panier`
        Then la quantité dans le panier correspond à la quantité selectionnée
        And je ferme le navigateur