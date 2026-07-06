---
title: Table
sidebar_position: 7
---

# 📊 Table

Composant de tableau performant exploitant le **Virtual Scroll** (CdkVirtualScrollViewport) d'Angular CDK. Idéal pour afficher des volumes de données très importants avec fluidité, thémage dynamique et indicateur de chargement.

Sélecteur HTML : `ngx-bits-table`

---

## 📸 Aperçu Visuel

![Table](/img/table.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsTableComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsTableComponent],
  // ...
})
```

### 2. Template HTML
Le composant nécessite la définition des en-têtes de colonnes, des données brutes, de la hauteur de ligne et d'un template réutilisable pour le rendu de chaque ligne :

```html
<ngx-bits-table 
  [headerNames]="headers" 
  [data]="items" 
  [elementTemplate]="rowTemplate" 
  [loading]="isLoading"
  (rowClickEvent)="onRowClick($event)"
/>

<ng-template #rowTemplate let-row="item">
  <!-- Rendu personnalisé de la ligne de données -->
  <div class="table-cell">{{ row.id }}</div>
  <div class="table-cell">{{ row.nom }}</div>
  <div class="table-cell">{{ row.statut }}</div>
</ng-template>
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
        <td>data *</td>
        <td>unknown[]</td>
        <td>—</td>
        <td>Le tableau de données brutes à afficher.</td>
      </tr>
      <tr>
        <td>elementTemplate *</td>
        <td>TemplateRef&lt;unknown&gt; | undefined</td>
        <td>—</td>
        <td>Le template HTML personnalisé utilisé pour formater chaque ligne de données.</td>
      </tr>
      <tr>
        <td>headerNames</td>
        <td>TableHeaderInterface[]</td>
        <td>—</td>
        <td>Tableau d'objets décrivant les colonnes (titre, largeur, etc.).</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>boolean</td>
        <td>false</td>
        <td>Affiche un spinner de chargement si `true`.</td>
      </tr>
      <tr>
        <td>height</td>
        <td>number</td>
        <td>theme-based</td>
        <td>Hauteur de chaque ligne (ligne de hauteur fixe requise par le virtual scroll).</td>
      </tr>
    </tbody>
  </table>
</div>

### Outputs

<div class="api-table-wrapper">
  <table class="api-table">
    <thead>
      <tr>
        <th>Événement</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>rowClickEvent</td>
        <td>EventEmitter&lt;unknown&gt;</td>
        <td>Émis lorsque l'utilisateur clique sur une ligne de données. Renvoie la donnée de la ligne cliquée.</td>
      </tr>
    </tbody>
  </table>
</div>
