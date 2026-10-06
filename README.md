Bank-Projekt – Online-Banking-Website:

Eine responsive Multi-Page-Website einer fiktiven Bank – gebaut als HTML/CSS/JS-Lernprojekt, um moderne Layout-Techniken (Flexbox, CSS Grid, Media Queries),
die BEM-Methodik und erste Formular-Interaktionen mit Vanilla JavaScript in der Praxis umzusetzen.

Live-Demo: https://michael-c-cmd.github.io/bank-project/


Über das Projekt:

Das Projekt bildet den öffentlichen Auftritt einer Bank ab: von der Startseite mit Produktübersicht (Girokonto, Kredit, Sparplan, Investitionen, Familien-Versicherung) über Beratungs- und Karriereseiten
bis hin zu Immobilien-Angeboten und den Premium-Kreditkarten (Golden, Silver, Normal Card).

Dazu gibt es einen kleinen interaktiven Bereich: ein Login-Formular sowie die Registrierung eines neuen Accounts – inklusive automatisch generiertem, zufälligem Passwort.



Features:

-Multi-Page-Auftritt mit konsistenter Navigation zwischen den Unterseiten
-Responsive Layouts – Desktop, Tablet und Smartphone (Media Queries, Mobile-First-Anpassungen)
-BEM-Methodik (Block__Element--Modifier) für skalierbares, lesbares CSS
-Flexbox & CSS Grid für Karten-Layouts, Seitenstrukturen und Produktübersichten
-Login-Formular mit Validierung (:focus-States, Pflichtfeld-Prüfung)
-Account-Erstellung mit zufällig generiertem Passwort (Vanilla JS)
-Semantisches HTML (header, nav, main, section, footer)


Verwendete Technologien:

-HTML5: Semantischer Seitenaufbau, Formulare (Login, Registrierung, Kontakt)
-CSS3: Flexbox, Grid, Media Queries, BEM, :focus-States, benutzerdefinierte Stiles pro Komponente
-Vanilla JavaScript (ES6)



Formular-Handling, Passwort-Generator, Produkt-Karten-Interaktion

Projektstruktur (Auszug):

bank-project/
├── index.html            # Startseite mit Produktübersicht & Premium-Karten
├── girokonto.html        # Girokonto-Produktseite
├── kredit.html           # Kredit-Produktseite
├── immobilien.html       # Immobilien-Angebote
├── karriere.html         # Karriereseite
├── beratung.html         # Beratung & Kontakt
├── newAccount.html       # Registrierung mit Passwort-Generator
├── style.css             # Globale Stile
├── [seite].css           # Seiten-/Komponenten-Stiles (u. a. produkt-karten, featured-products)
├── login.js              # Login-Formular-Logik
├── newAccount.js         # Registrierungs-Logik
├── passwordGenerator.js  # Zufalls-Passwort-Generator
└── produkt-karten.js     # Interaktion der Produkt-Karten

Lernziel & Reflexion:

Dieses Projekt ist mein HTML/CSS-Grundlagen-Projekt – es zeigt, dass ich responsive, mehrseitige Websites ohne Frameworks bauen kann.
Im Fokus standen bewusst Layout-Technik (Flexbox/Grid), Responsivität und saubere CSS-Architektur (BEM) statt Backend-Logik. 
Meine Gedanken und Entscheidungen während der Entwicklung halte ich in reflexion.txt fest.

Erweiterungen wie localStorage-Persistenz, SPA-Routing oder API-Anbindung habe ich in späteren Projekten umgesetzt (siehe meine anderen Repositories).

Autor:

Michael Čepelka – Junior Frontend Developer (Quereinsteiger)
GitHub: @Michael-C-cmd



About this project (English abstract)

This is a responsive multi-page website for a fictional bank, built with plain HTML5, CSS3 and vanilla JavaScript – no frameworks.
It showcases modern layout techniques (Flexbox, CSS Grid, media queries), BEM naming in CSS, semantic HTML, and small interactive features such as a validated login form
and an account registration with a randomly generated password. It was created as a learning project to demonstrate solid, framework-independent frontend fundamentals.

Live demo: https://michael-c-cmd.github.io/bank-project/
