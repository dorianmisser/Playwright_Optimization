@browser
Feature: Tunnel de commande
    Scenario: Création compte pendant la commande
    Given je me rends sur la page des produits
    And je génère des informations clients randoms
    When j ajoute 1 produit.s dans mon panier
    And je clique sur Proceed To Checkout et sur le bouton RegisterLogin
    And je rempli le pré-formulaire de création avec des identifiants nouveaux
    And je rempli le formulaire de création
    Then un compte client est créé
    When je procède à la commande
    Then ma commande est réalisée
    And je ferme le navigateur

    Scenario: Connexion compte pendant la commande
    Given je me rends sur la page des produits
    When j ajoute 1 produit.s dans mon panier
    And je clique sur Proceed To Checkout et sur le bouton RegisterLogin
    And je me connecte à mon compte
    Then je suis connecté à mon compte
    When je procède à la commande
    Then ma commande est réalisée
    And je ferme le navigateur

    Scenario: Télécharger une facture après la commande
    Given je me rends sur la page des produits
    When j ajoute 1 produit.s dans mon panier
    And je clique sur Proceed To Checkout et sur le bouton RegisterLogin
    And je me connecte à mon compte
    Then je suis connecté à mon compte
    When je procède à la commande
    When je clique sur le bouton Download Invoice
    Then le fichier se télécharge et correpond à l'attendu
    Then ma commande est réalisée
    When je supprime le compte créé
    Then le message Account Deleted! apparait
    And je ferme le navigateur