---
title: Link Button
sidebar_position: 3
---

# 🔗 Link Button

Bouton stylisé sous forme de lien hypertexte textuel, idéal pour les actions secondaires (ex: "Annuler", "En savoir plus"), avec support d'états désactivés et de spinners de chargement.

Sélecteur HTML : `ngx-bits-link-button`

---

## 📸 Aperçu Visuel

![Link Button](/img/link_button.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsLinkButtonComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsLinkButtonComponent],
  // ...
})
```

### 2. Template HTML
```html
<ngx-bits-link-button [linkButtonContainer]="myLinkConfig" />
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
        <td>linkButtonContainer *</td>
        <td>LinkButtonInterface</td>
        <td>Objet de configuration décrivant le comportement et le libellé du lien.</td>
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
        <td>clickEvent</td>
        <td>EventEmitter&lt;void&gt;</td>
        <td>Émis lorsque l'utilisateur clique sur le bouton-lien.</td>
      </tr>
    </tbody>
  </table>
</div>

### Méthodes publiques (ViewChild)
- `setLinkButton(config: LinkButtonInterface): void` : Met à jour la configuration.
- `setLoading(loading: boolean): void` : Active/désactive le spinner de chargement textuel.
- `setDisable(disable: boolean): void` : Active/désactive le lien.
