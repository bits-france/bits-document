---
title: Avatar
sidebar_position: 10
---

# 👤 Avatar

Composant d'affichage d'avatar utilisateur. Supporte le rendu d'une image, ou génère automatiquement des initiales à partir du nom si aucune image n'est fournie.

Sélecteur HTML : `ngx-bits-avatar`

---

## 📸 Aperçu Visuel

![Avatar](/img/avatar.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsAvatarComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsAvatarComponent],
  // ...
})
```

### 2. Template HTML
```html
<ngx-bits-avatar [avatar]="userAvatar" />
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
        <td>avatar *</td>
        <td>AvatarInterface</td>
        <td>Objet de configuration décrivant les données de l'avatar.</td>
      </tr>
    </tbody>
  </table>
</div>

### Interfaces

#### AvatarInterface
- `name?` : `string` (Nom complet de l'utilisateur. Utilisé pour générer les initiales si l'image est manquante).
- `imageUrl?` : `string` (Lien HTTP vers l'image de profil).
- `size?` : `number` (Taille de l'avatar en pixels, par défaut `48`).
