---
title: Card
sidebar_position: 4
---

# 🃏 Card

Conteneur de contenu flexible avec des marges intérieures (padding), des ombres et des bordures arrondies respectant la charte graphique de l'application cliente.

Sélecteur HTML : `ngx-bits-card`

---

## 📸 Aperçu Visuel

### Carte Standard
![Card](/img/card.png)

### Exemples d'implémentations
Dans l'écosystème **Bits Solution**, la structure de la carte sert de fondation pour d'autres conteneurs :

#### Carte de Notification
![Notification Card](/img/notification_card.png)

#### Petite Carte de Dashboard
![Dashboard Small Card](/img/dashboard_card.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsCardComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsCardComponent],
  // ...
})
```

### 2. Template HTML
Le composant accepte tout type de contenu HTML à l'intérieur de ses balises (`ng-content`) :

```html
<ngx-bits-card [cardContainer]="myCardConfig">
  <h3>Titre du Contenu</h3>
  <p>Ceci est un texte dans une carte standardisée.</p>
</ngx-bits-card>
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
        <td>cardContainer</td>
        <td>CardInterface</td>
        <td>`{}`</td>
        <td>Objet de configuration optionnel pour surcharger les paddings globaux de la carte.</td>
      </tr>
    </tbody>
  </table>
</div>

### Interfaces

#### CardInterface
- `padding?: PaddingInterface` : Surcharge des marges intérieures de la carte.

#### PaddingInterface
- `paddingTop?: number`
- `paddingRight?: number`
- `paddingBottom?: number`
- `paddingLeft?: number`
