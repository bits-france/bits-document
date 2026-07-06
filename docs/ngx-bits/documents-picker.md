---
title: Documents Picker
sidebar_position: 11
---

# 📎 Documents Picker

Composant d'upload de fichiers complet, gérant le glisser-déposer (drag-and-drop), le multi-téléchargement et la liste des fichiers sélectionnés avec bouton de suppression.

Sélecteur HTML : `ngx-bits-documents-picker`

---

## 📸 Aperçu Visuel

### Zone de Dépôt standard
![Documents Picker Dropzone](/img/documents-picker.png)

### Rendu d'un Fichier Sélectionné
![Document Item Display](/img/document-item-display.png)

---

## 🚀 Utilisation

### Standalone

#### 1. Importation
```typescript
import { NgxBitsDocumentsPickerComponents } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsDocumentsPickerComponents],
  // ...
})
```

#### 2. Template HTML
```html
<ngx-bits-documents-picker 
  [multiple]="true" 
  [name]="'Mes Documents'" 
  (changeFileArrayEvent)="onFilesChange($event)" 
/>
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
        <td>multiple</td>
        <td>boolean</td>
        <td>false</td>
        <td>Permet la sélection de plusieurs fichiers simultanément si `true`.</td>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
        <td>'Document'</td>
        <td>Label ou placeholder affiché dans le sélecteur.</td>
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
        <td>changeFileArrayEvent</td>
        <td>EventEmitter&lt;File[]&gt;</td>
        <td>Émis à chaque fois qu'un fichier est ajouté ou retiré du sélecteur. Renvoie la liste complète des fichiers sélectionnés.</td>
      </tr>
    </tbody>
  </table>
</div>
