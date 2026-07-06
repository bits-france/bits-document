---
title: Toggle Button
sidebar_position: 6
---

# 🔀 Toggle Button Group

Groupe de boutons de sélection exclusive (single-select) stylisés sous forme de pilules d'activation. Il peut être utilisé de manière autonome ou imbriqué à l'intérieur d'un formulaire réactif dynamic via le Form Builder.

Sélecteur HTML : `ngx-bits-toggle-button-group`

---

## 📸 Aperçu Visuel

### Variantes Standard
![Toggle Buttons](/img/toggle_buttons.png)

---

## 🚀 Utilisation

### Standalone

#### 1. Importation
```typescript
import { NgxBitsToggleButtonGroupComponents } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsToggleButtonGroupComponents],
  // ...
})
```

#### 2. Configuration
```typescript
readonly myToggleGroup = {
  toggleButtons: [
    { label: 'Financier' },
    { label: 'Technique' },
    { label: 'Autre' }
  ],
  selectedLabel: 'Autre',
  rowCount: 1
};
```

#### 3. Template HTML
```html
<ngx-bits-toggle-button-group [toggleButtonGroupContainer]="myToggleGroup" />
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
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>toggleButtonGroupContainer *</td>
        <td>ToggleButtonGroupInterface</td>
        <td>Configuration décrivant les boutons et le bouton présélectionné.</td>
      </tr>
    </tbody>
  </table>
</div>

### Interfaces

#### ToggleButtonGroupInterface
- `toggleButtons *` : `ToggleButtonInterface[]` (Liste des boutons, minimum 2 requis).
- `selectedLabel?` : `string` (Libellé du bouton actif par défaut).
- `rowCount?` : `number` (Nombre de lignes de disposition, par défaut `1`).

#### ToggleButtonInterface
- `label *` : `string` (Nom du bouton).
