---
title: Sideview
sidebar_position: 9
---

# 📐 Sideview

Composant de mise en page (Layout) double panneau. Permet d'afficher un panneau gauche et un panneau droit côte à côte sur écran large, et de basculer en vue à panneau unique sur mobile. Un mode "single panel" permet de forcer ce comportement mobile également sur écran de bureau.

Sélecteur HTML : `ngx-bits-sideview`

---

## 📸 Aperçu Visuel

![Sideview Layout](/img/sidvew_large.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsSideviewComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsSideviewComponent],
  // ...
})
```

### 2. Template HTML
Le composant utilise des slots nommés (`[contentLeft]` et `[contentRight]`) pour positionner les deux vues :

```html
<ngx-bits-sideview 
  [displaySideview]="DisplaySideViewPosition.left"
  [singlePanelMode]="isMobile"
>
  <div contentLeft>
    <!-- Contenu du panneau gauche (ex: Liste) -->
    <h2>Liste des Projets</h2>
  </div>
  
  <div contentRight>
    <!-- Contenu du panneau droit (ex: Détails) -->
    <h2>Détail du Projet Sélectionné</h2>
  </div>
</ngx-bits-sideview>
```

---

## 📊 Référence API

### Inputs

<div class="api-table-wrapper">
  <table class="api-table">
    <thead>
      <tr>
        <th>Propriété</th>
        <th>Type</th>
        <th>Défaut</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>displaySideview</td>
        <td>DisplaySideViewPosition</td>
        <td>`DisplaySideViewPosition.left`</td>
        <td>Spécifie le panneau visible actif. `left` (gauche) ou `right` (droit).</td>
      </tr>
      <tr>
        <td>singlePanelMode</td>
        <td>boolean</td>
        <td>false</td>
        <td>Si `true`, force l'affichage d'un seul panneau à la fois à pleine largeur (même sur ordinateur). Utile pour concevoir des commutations d'écrans détaillés.</td>
      </tr>
    </tbody>
  </table>
</div>

### Enums

#### DisplaySideViewPosition
- `0` (équivalent à `DisplaySideViewPosition.left`) : Affiche le panneau gauche.
- `1` (équivalent à `DisplaySideViewPosition.right`) : Affiche le panneau droit.
