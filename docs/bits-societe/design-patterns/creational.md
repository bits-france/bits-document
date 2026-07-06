---
title: Creational Patterns
sidebar_position: 2
---

# 🔨 Creational Patterns

Creational design patterns focus on object creation mechanisms. They shield the application from instantiation details and decouple classes from concrete types.

---

## 1. Factory Method

* **Explanation**: Delegates object creation to subclasses via a dedicated factory method, preventing direct `new` instantiations of concrete classes in client code.
* **TypeScript Example**:
```typescript
abstract class ButtonCreator {
  abstract createButton(): void;
  
  render() {
    this.createButton();
  }
}

class WindowsButtonCreator extends ButtonCreator {
  createButton() { console.log('Windows Button Created'); }
}

class HTMLButtonCreator extends ButtonCreator {
  createButton() { console.log('HTML Button Created'); }
}
```

---

## 2. Abstract Factory

* **Explanation**: Creates families of related or dependent objects (e.g., Windows buttons and checkboxes, or Mac buttons and checkboxes) without specifying their concrete classes.
* **TypeScript Example**:
```typescript
interface GUIFactory {
  createButton(): string;
  createCheckbox(): string;
}

class WinFactory implements GUIFactory {
  createButton() { return 'Windows Button'; }
  createCheckbox() { return 'Windows Checkbox'; }
}

class MacFactory implements GUIFactory {
  createButton() { return 'Mac Button'; }
  createCheckbox() { return 'Mac Checkbox'; }
}
```

---

## 3. Builder

* **Explanation**: Enables constructing complex objects step-by-step. Particularly useful when objects have a large number of optional parameters or require a sequential configuration.
* **TypeScript Example**:
```typescript
class QueryBuilder {
  private query = '';
  
  select(fields: string): this { 
    this.query += `SELECT ${fields} `; 
    return this; 
  }
  
  where(condition: string): this { 
    this.query += `WHERE ${condition} `; 
    return this; 
  }
  
  build(): string {
    return this.query.trim();
  }
}

// Fluent usage:
const sql = new QueryBuilder().select('id, name').where('age > 18').build();
```

---

## 4. Prototype

* **Explanation**: Copies or clones existing objects without making the client code dependent on their concrete classes.
* **TypeScript Example**:
```typescript
class DocumentPrototype {
  constructor(public title: string, public content: string) {}
  
  clone(): this {
    return Object.create(this);
  }
}

const original = new DocumentPrototype('Report', 'Data...');
const copy = original.clone();
```

---

## 5. Singleton

* **Explanation**: Ensures that a class has only one instance throughout the application life-cycle and provides a single global access point to it.
* **TypeScript Example**:
```typescript
class Database {
  private static instance: Database;
  
  private constructor() {} // Prevents direct new instantiation
  
  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}
```
