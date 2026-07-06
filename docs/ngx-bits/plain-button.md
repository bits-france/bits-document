---
title: Plain Button
sidebar_position: 2
---

# 🔘 Plain Button

Composant de bouton d'action hautement configurable avec support d'icônes, de spinners de chargement, d'états désactivés et d'effets ripple d'Angular Material.

Sélecteur HTML : `ngx-bits-plain-button`

---

## 📸 Aperçu Visuel

![Plain Button](/img/button.png)

---

## 🚀 Utilisation

### 1. Importation
Importez le composant standalone dans votre composant Angular :

```typescript
import { NgxBitsPlainButtonComponent } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsPlainButtonComponent],
  // ...
})
```

### 2. Template HTML
Liez la configuration du bouton via la propriété `buttonContainer` :

```html
<ngx-bits-plain-button [buttonContainer]="myButtonConfig" />
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
        <td>buttonContainer *</td>
        <td>PlainButtonInterface</td>
        <td>Objet de configuration décrivant le comportement et le style du bouton.</td>
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
        <td>Émis lorsque le bouton est cliqué (uniquement s'il n'est ni désactivé ni en chargement).</td>
      </tr>
    </tbody>
  </table>
</div>

### Méthodes publiques
Vous pouvez appeler ces méthodes à l'aide d'un `@ViewChild` :

<div class="api-table-wrapper">
  <table class="api-table">
    <thead>
      <tr>
        <th>Méthode</th>
        <th>Signature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>setButton()</td>
        <td>(buttonContainer: PlainButtonInterface): void</td>
        <td>Met à jour dynamiquement toute la configuration du bouton.</td>
      </tr>
      <tr>
        <td>setLoading()</td>
        <td>(loading: boolean): void</td>
        <td>Active ou désactive l'état de chargement (affiche un spinner).</td>
      </tr>
      <tr>
        <td>setDisable()</td>
        <td>(disable: boolean): void</td>
        <td>Active ou désactive le bouton.</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 📝 Configuration (PlainButtonInterface)

<div class="api-table-wrapper">
  <table class="api-table">
    <thead>
      <tr>
        <th>Champ</th>
        <th>Type</th>
        <th>Défaut</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>title *</td>
        <td>string</td>
        <td>—</td>
        <td>Le libellé textuel affiché sur le bouton.</td>
      </tr>
      <tr>
        <td>clickFunction</td>
        <td>() =&gt; void</td>
        <td>—</td>
        <td>Fonction callback exécutée lors du clic.</td>
      </tr>
      <tr>
        <td>isDisabled</td>
        <td>boolean</td>
        <td>false</td>
        <td>Désactive le bouton si `true`.</td>
      </tr>
      <tr>
        <td>isLoading</td>
        <td>boolean</td>
        <td>false</td>
        <td>Affiche le spinner de chargement si `true`.</td>
      </tr>
      <tr>
        <td>actionType</td>
        <td>'button' | 'submit'</td>
        <td>'button'</td>
        <td>Attribut HTML `type` du bouton.</td>
      </tr>
      <tr>
        <td>iconOrImage</td>
        <td>ButtonIconOrImage</td>
        <td>—</td>
        <td>Configuration de l'icône/image optionnelle (Material icon ou URL).</td>
      </tr>
    </tbody>
  </table>
</div>
