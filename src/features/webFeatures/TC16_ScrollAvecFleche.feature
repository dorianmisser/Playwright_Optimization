@browser
Feature: Scrolling
    Scenario: Scroll sur la page d'accueil via la flèche
        Given je suis sur la page d'accueil
        When je scrolle jusqu'au footer
        Then le texte 'Subscription' is visible
        When je clique sur la fleche en bas à droite
        Then le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible
