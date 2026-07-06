---
title: Vertical Navbar
sidebar_position: 8
---

# 🗂️ Vertical Navbar

Barre de navigation latérale (sidebar) collapsible, avec gestion de logo, d'items de menu supérieurs et inférieurs et d'événements de clic.

Sélecteur HTML : `ngx-bits-vertical-navbar`

---

## 📸 Aperçu Visuel

### Barre Pliée
![Closed Navbar](/img/closed_navbar.png)

### Dropdown Menu
![Navbar Dropdown](/img/dropdown.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsVerticalNavbarComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsVerticalNavbarComponent],
  // ...
})
```

### 2. Template HTML
```html
<ngx-bits-vertical-navbar 
  [navbarContainer]="myNavbarConfig" 
  (menuClickedEvent)="onMenuToggle()" 
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
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>navbarContainer *</td>
        <td>NavbarInterface</td>
        <td>Configuration de la barre de navigation.</td>
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
        <td>menuClickedEvent</td>
        <td>EventEmitter&lt;void&gt;</td>
        <td>Émis lorsque la barre de navigation est ouverte ou pliée par l'utilisateur.</td>
      </tr>
    </tbody>
  </table>
</div>

### Méthodes publiques (ViewChild)
- `setTopItems(items: NavbarItemInterface[]): void` : Met à jour la liste supérieure d'items.
- `setBottomItems(items: NavbarItemInterface[]): void` : Met à jour la liste inférieure d'items (ex: Profil, Déconnexion).
- `selectId(id: string): void` : Modifie l'onglet sélectionné activement.
