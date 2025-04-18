@browser
Feature: Scrolling
        Scenario: Scroll sur la page d'accueil sans la flèche
                Given je suis sur la page d'accueil
                When je scrolle jusqu'au footer
                Then le texte 'Subscription' is visible
                When je scrolle jusqu'au header
                Then le header est affiché et le texte 'Full-Fledged practice website for Automation Engineers' est visible
