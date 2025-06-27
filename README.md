# HRnet React - Projet OpenClassrooms

Ce projet est une conversion React d’une application interne fictive HRnet, qui gère les dossiers employés.

## Contexte

L'ancienne application utilisait des plugins jQuery (datepicker, modale, dropdown, table) qui posaient problème (bugs, lenteurs).

L’objectif était de convertir au moins un plugin jQuery en React et d’utiliser des composants React pour améliorer l’app.

## Ce que j’ai fait

- Conversion complète du projet HRnet en React (pages création et liste employés)
- Création de mes propres composants React pour :
  - Le sélecteur de date (datepicker)
  - La fenêtre modale (modale)
- Import et intégration de composants tiers React pour les autres plugins (dropdown, table)
- Gestion d’état avec Redux
- Composants accessibles, modulaires et fonctionnels
- Styles en SCSS avec responsive design

## Technologies utilisées

- **React** (Vite)
- **Redux** (gestion d’état)
- **SCSS** (stylisation responsive)
- **@tanstack/react-table** (tableaux dynamiques)
- **react-select**(dropdown/select)
- **React Router** (navigation)
- **NPM** (publication de composants)
- **Lighthouse** (audit de performance)
- **React Icons** (icônes)

## Usage

1. Cloner le repo `https://github.com/Daiba-yume/Project_14_WH.git`
2. Installer les dépendances : `npm install`
3. Lancer le projet : `npm run dev`

## Liens des composants créer (NPM)

### Modal

[https://www.npmjs.com/package/react-modal-yume](https://www.npmjs.com/package/react-modal-yume)

### DatePicker

[https://www.npmjs.com/package/react-datepicker-yume](https://www.npmjs.com/package/react-datepicker-yume)

---

## Auteur

Daïba Yume :purple_heart:

---
