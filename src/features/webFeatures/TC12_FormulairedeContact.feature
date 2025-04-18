@browser
Feature: Formulaire Nous Contacter
    Scenario: Remplir le formulaire "Nous contacter"
        Given je clique sur le bouton contact us
        When je rempli le formulaire de contact
        Then le message Success! Your details have been submitted successfully. apparait
        And je ferme le navigateur