---
title: Single Responsibility Principle
sidebar_position: 2
---

# 📦 Single Responsibility Principle (SRP)

> **A class should have one, and only one, reason to change.**

This means that a class should perform a single job or address a single responsibility. When a class has multiple responsibilities, those responsibilities become coupled, making the class fragile and hard to modify or test.

---

## ❌ Violating SRP

In the example below, the `User` class is responsible for both holding user data and formatting/serializing the user details into JSON. If the formatting logic changes, we have to modify the `User` class.

```typescript
class User {
  constructor(
    public name: string,
    public email: string
  ) {}

  // ❌ Bad: The class is handling formatting/serialization
  formatJSON(): string {
    return JSON.stringify({
      fullName: this.name,
      emailAddress: this.email,
      timestamp: Date.now()
    });
  }
}
```

---

## ✅ Applying SRP

To adhere to SRP, we split the responsibilities: `User` holds data, while `UserSerializer` handles formatting.

```typescript
// Responsibility 1: User Data Model
class User {
  constructor(
    public name: string,
    public email: string
  ) {}
}

// Responsibility 2: User Serialization
class UserSerializer {
  serializeJSON(user: User): string {
    return JSON.stringify({
      fullName: user.name,
      emailAddress: user.email,
      timestamp: Date.now()
    });
  }
}
```
