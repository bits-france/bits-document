---
title: Software Architecture & GitHub Actions
sidebar_position: 3
---

# 📐 Software Architecture & GitHub Actions CI/CD

This section details the global architectural organization of the **TendsAi** workspace and its automated continuous integration and delivery (CI/CD) pipelines managed by **GitHub Actions**.

---

## 1. Monorepo Workspace Organization

Our workspace is structured as a monorepo containing three main project spaces:

```
TendsAi-App/
├── ngx-bits/               # Shared Angular UI Component library
│   ├── projects/ngx-bits/  # Library source code (signals-based inputs/outputs)
│   └── docs/               # Documentation site (Docusaurus)
│
├── tendsai-web-and-desktop/# Main Angular client application (Angular 21)
│   └── src/app/
│       ├── core/           # Infrastructure singletons (Auth, interceptors, guards)
│       └── main/           # Domain feature modules
│
└── documentation/          # Corporate documentation portal
```

---

## 2. TendsAi Project Architecture & Hierarchy

The core client application `tendsai-web-and-desktop` isolates distinct business domains under the `src/app/main/` folder:

```
src/app/main/
├── back-office/             # Administrative backoffice features
├── commons/                 # Views and layout assets shared across modules
└── partenaire-pro/          # B2B Professional Partner space
    ├── home-module/         # Partner home dashboard
    └── questions-module/    # Interactive questionnaire creator
        ├── components/      # Smart and Presentation views (add-question, question-details)
        └── models/          # Data model interfaces (QuestionItemModel)
```

### Presentation & Container Design Pattern (Smart & Dumb)
Within `questions-module`, we strictly decouple presentation logic from data fetching:
- **questions-container** (Smart / Container): Injects state stores (NGRX Signals/Bits) and dispatches HTTP requests.
- **question-item** (Presentation / Dumb): Receives reactive data using a read-only input signal (`item = input.required<QuestionItemModel>()`) and emits events up to the container via `output()`. No services or stores are injected here.

---

## 3. CI/CD Workflows (GitHub Actions)

We maintain **8 automated GitHub Actions workflows** under the `.github/workflows/` directory in the `ngx-bits` repository:

### A. Continuous Integration & Quality Assurance
- **Linting (`linting.yml`)**: Runs `npm run lint` on every git push to enforce styling guidelines.
- **Testing (`testing.yml`)**: Runs unit and integration tests using `npm run test -- --watch=false` on all branch pushes (excluding main).
- **Qodana Code Quality (`qodana_code_quality.yml`)**: Invokes a JetBrains Qodana static security and quality audit on pull requests and main branch pushes.

### B. Deployment & Package Publishing
- **Build (`building.yml`)**: Checks that the Angular library compiles correctly upon modification.
- **Release (`release.yml`)**: Automates Git tags creation and semantic version tagging.
- **Publish to GitHub Packages (`publish_to_github_packages.yml`)**: Triggered upon publishing a Git release. It:
  1. Synchronizes the root `package.json` version down to the sub-project library.
  2. Publishes the compiled library to the GitHub Package Registry under the `@karma-solutions-org` scope.
- **Deploy Documentation (`deploy_documentation.yml`)**: Triggered upon pushing docs edits to `main`. It compiles the Docusaurus site (`npm run build`) and publishes it to **GitHub Pages** using `peaceiris/actions-gh-pages`.
