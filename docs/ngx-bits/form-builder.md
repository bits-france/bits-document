---
title: Form Builder
sidebar_position: 5
---

# 📝 Form Builder

Moteur de formulaire dynamique ultra-performant. Il génère automatiquement un formulaire réactif complet à partir d'une configuration fluent programmée en TypeScript.

Sélecteur HTML : `ngx-bits-form-builder`

---

## 📸 Aperçu Visuel

### Rendu d'un Formulaire Valide
![Form Builder Valid](/img/form_builder_valid.png)

### Rendu d'un Formulaire Non Valide
![Form Builder Not Valid](/img/form_builder_not_valid.png)

### Messages de Validation
![Form Validation Errors](/img/form_validation.png)

---

## 🚀 Utilisation

### 1. Importation
```typescript
import { NgxBitsFormBuilderComponents } from '@bits-solution-org/ngx-bits';

@Component({
  imports: [NgxBitsFormBuilderComponents],
  // ...
})
```

### 2. Configuration dans le composant TS
Utilisez la classe `FormBuilderModel` pour configurer vos champs de formulaire avec des méthodes chaînées :

```typescript
import { FormBuilderModel } from '@bits-solution-org/ngx-bits';

readonly myFormConfig = new FormBuilderModel()
  .text({
    formControlName: 'nom',
    label: 'Nom complet',
    required: true,
    placeholder: 'Saisir votre nom...'
  })
  .email({
    formControlName: 'email',
    label: 'Adresse email',
    required: true
  })
  .submitButton({
    title: 'Enregistrer'
  });
```

### 3. Template HTML
```html
<ngx-bits-form-builder 
  [formBuilder]="myFormConfig" 
  (submitEvent)="onSubmit($event)" 
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
        <td>formBuilder *</td>
        <td>FormBuilderModel</td>
        <td>Modèle contenant la définition de tous les champs du formulaire.</td>
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
        <td>submitEvent</td>
        <td>EventEmitter&lt;Record&lt;string, unknown&gt;&gt;</td>
        <td>Émis lorsque l'utilisateur valide le formulaire et que ce dernier est valide. Contient les valeurs du formulaire.</td>
      </tr>
      <tr>
        <td>valueChangedEvent</td>
        <td>EventEmitter&lt;Record&lt;string, unknown&gt;&gt;</td>
        <td>Émis à chaque modification d'un champ du formulaire.</td>
      </tr>
    </tbody>
  </table>
</div>

### Méthodes publiques (ViewChild)
- `setValues(values: Record<string, unknown>): void` : Assigne des valeurs aux champs du formulaire.
- `getValues(): Record<string, unknown>` : Récupère les valeurs actuelles du formulaire.
- `isFormValid(): boolean` : Indique si le formulaire est actuellement valide.
- `setLoading(loading: boolean): void` : Active/désactive le statut de chargement du formulaire (désactive le bouton de validation).
- `setInitialObject(initialObject: Record<string, unknown>): void` : Assigne un objet initial. Le bouton de validation ne s'activera que si des modifications ont été apportées par rapport à cet état initial.
- `addFormBuilderItems(formBuilder: FormBuilderModel): void` : Ajoute dynamiquement des champs.
- `removeFormBuilderItem(formControlName: string): void` : Supprime un champ dynamiquement.
