---
title: Dependency Inversion Principle
sidebar_position: 6
---

# 🔗 Dependency Inversion Principle (DIP)

> **High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.**

Essentially, you should code against interfaces (abstractions) rather than concrete implementations. This enables swapping database connections, API configurations, or external services without modifying core business services.

---

## ❌ Violating DIP

In the example below, the high-level `App` class is tightly coupled to the concrete `MySqlDatabase` class. Swapping SQL to Mongo requires modifying `App`.

```typescript
class MySqlDatabase {
  connect() { console.log('Connecting to MySQL...'); }
}

class App {
  private db: MySqlDatabase;

  constructor() {
    // ❌ Bad: Tightly coupled to concrete implementation MySqlDatabase!
    this.db = new MySqlDatabase(); 
  }

  run() {
    this.db.connect();
  }
}
```

---

## ✅ Applying DIP

We introduce an abstraction (interface `Database`) and inject it. The concrete classes depend on the abstraction, and the high-level `App` class depends on the interface.

```typescript
// Abstraction (Interface)
interface Database {
  connect(): void;
}

// Low-level details implementing abstraction
class MySqlDatabase implements Database {
  connect() { console.log('Connecting to MySQL...'); }
}

class MongoDatabase implements Database {
  connect() { console.log('Connecting to MongoDB...'); }
}

// High-level module depending only on abstraction
class App {
  // Inject dependency via constructor
  constructor(private db: Database) {}

  run() {
    this.db.connect();
  }
}

// Instantiate with concrete class of choice
const app = new App(new MongoDatabase()); // Easy to swap!
```
