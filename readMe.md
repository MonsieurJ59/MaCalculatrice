# 🚀 Ma Calculatrice

Ce projet implémente une **calculatrice web** interactive réalisée en respectant la méthodologie **Test Driven Development (TDD)**.

## 🎯 Objectifs

- Développer une logique métier testée unitairement.
- Concevoir une interface utilisateur réactive.
- Implémenter des tests E2E (End-to-End).
- Assurer une qualité de code via un linter (ESLint).

## 🛠️ Fonctionnalités

- Opérations basiques : addition, soustraction, multiplication, division.
- Historique des opérations effectuées.
- Reprise d'un résultat précédent depuis l'historique.
- Effacement total ou partiel des entrées.

## 🧱 Structure du Projet

```
MaCalculatrice/
├── calculatrice/      # Front-end
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── src/               # Logique métier
│   └── Calculatrice.js
├── tests/             # Tests unitaires
│   └── Calculatrice.test.js
├── e2e/               # Tests E2E avec Playwright
│   └── calculatrice.spec.js
├── package.json
├── playwright.config.js
├── .eslintrc.js
└── .gitignore
```

## 🚦 Démarrage rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer l'application

Ouvrir `calculatrice/index.html` dans un navigateur.

### 3. Exécuter les tests

- **Tests unitaires (Vitest)** :

```bash
npm test
```

- **Tests E2E (Playwright)** :

```bash
npm run test:e2e
```
```
npx playwright test --ui
```

### 4. Vérifier la qualité du code (ESLint)

```bash
npm run lint
```

## 🧪 Technologies utilisées

- HTML / CSS / JavaScript
- Vitest (tests unitaires)
- Playwright (tests E2E)
- ESLint (linter)

## 📌 Méthodologie TDD

Ce projet suit strictement la méthodologie **Test Driven Development** :

1. Écriture d'un test.
2. Implémentation minimale pour passer le test.
3. Refactoring progressif et vérification continue.

## 📚 Auteur

**Julian** – Projet réalisé dans le cadre du cours Qualité & Tests.