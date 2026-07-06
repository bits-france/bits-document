---
title: Architectural Patterns
sidebar_position: 5
---

# 🏗️ Architectural Patterns

Architectural design patterns address structural organization, concern separation, and dependency management at the scale of an entire application or module.

---

## 24. Repository Pattern

* **Explanation**: Isolates the data access layer (SQL database, HTTP API, Firebase) from the business logic by centralizing access in designated repository classes.
* **TypeScript Example**:
```typescript
interface UserRepository {
  getById(id: string): User;
}

class SQLUserRepository implements UserRepository {
  getById(id: string) { 
    return new User('SQL User'); 
  }
}

class MockUserRepository implements UserRepository {
  getById(id: string) { 
    return new User('Mock User'); 
  }
}
```

---

## 25. Dependency Injection (DI)

* **Explanation**: An architectural pattern where an injector provides required dependencies to an object rather than letting the object instantiate them internally. This is the core mechanism of Angular's service injection (`@Injectable()`).
* **TypeScript Example**:
```typescript
class ApiService {
  getData() { return 'data'; }
}

class UserComponent {
  // Dependency injected through constructor
  constructor(private api: ApiService) {}
  
  load() {
    this.api.getData();
  }
}
```
