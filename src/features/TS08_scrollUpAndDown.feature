@browser
Feature: Scroll sur la page d'accueil via la flèche
    Scenario: Création compte pendant la commande
    Given je suis sur la page d'accueil
    When je scrolle jusqu'au footer
    Then le texte 'Subscription' is visible
    When je clique sur la fleche en bas à droite
    Then le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible

    Scenario: Scroll sur la page d'accueil sans la flèche
    Given je suis sur la page d'accueil
    When je scrolle jusqu'au footer
    Then le texte 'Subscription' is visible
    When je scrolle jusqu'au header
    Then le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible
