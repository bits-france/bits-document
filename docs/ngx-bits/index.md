---
title: Introduction & Installation
sidebar_position: 1
---

# 📦 Introduction & Installation

`ngx-bits-lib` est une bibliothèque de composants Angular moderne, robuste et performante, construite sur les fondations solides d'**Angular Material** et optimisée pour l'utilisation des **Signals Angular**.

Conçue par Bits Solution, elle propose des abstractions prêtes à l'emploi pour accélérer la création de formulaires dynamiques, de tables avec scroll virtuel, d'affichages doubles panneaux responsifs et bien d'autres éléments récurrents des applications d'entreprise.

---

## 🚀 Installation

Installez la bibliothèque ainsi que ses dépendances via npm :

```bash
npm install @bits-solution-org/ngx-bits
```

---

## 🎨 Configuration du Thème

`ngx-bits-lib` utilise un système de thémage dynamique basé sur un **Theme Provider** global injecté dans l'application. Cela vous permet d'ajuster les couleurs primaires, secondaires, de contraste et les styles visuels de l'ensemble de la bibliothèque instantanément.

Ajoutez le provider dans le fichier `app.config.ts` de votre projet Angular :

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideNgxBits, StylingTheme } from '@bits-solution-org/ngx-bits';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuration thématique globale de ngx-bits
    provideNgxBits({
      colorTheme: {
        primaryColor: '#6C63FF',      // Couleur primaire (ex: boutons, focus)
        oppositeColor: '#ffffff',     // Couleur de texte sur fond primaire
        secondaryColor: '#00D4AA',    // Couleur secondaire / Accent
      },
      stylingTheme: StylingTheme.DEFAULT, // Thème de style global
    }),
  ],
};
```

---

## 📂 Catégories des Composants

La bibliothèque s'organise en plusieurs catégories de composants standalone :

- **[Buttons](./plain-button.md)** : Plain Button, Link Button
- **[Cards](./card.md)** : Card standard et spécialisées
- **[Forms](./form-builder.md)** : Form Builder dynamique, Toggle Button Group
- **[Tables](./table.md)** : Table optimisée avec virtual scroll
- **[Navigation](./navbar.md)** : Vertical Navbar pliable
- **[Layout](./sideview.md)** : Sideview double panneau
- **[Utilities](./avatar.md)** : Avatar, Documents Picker
