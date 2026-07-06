---
title: Liskov Substitution Principle
sidebar_position: 4
---

# 🔁 Liskov Substitution Principle (LSP)

> **Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.**

A subclass must override parent methods in a way that does not break the expectations or behavior expected from the parent.

---

## ❌ Violating LSP

In the classic example, `Ostrich` inherits from `Bird` but cannot fly. It throws an error, which breaks code expecting any `Bird` to be able to call `fly()` safely.

```typescript
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Eagle extends Bird {}

class Ostrich extends Bird {
  // ❌ Bad: Ostrich breaks parent class fly behavior expectations!
  override fly() {
    throw new Error('Ostriches cannot fly!');
  }
}

function launchBirds(birds: Bird[]) {
  birds.forEach(b => b.fly()); // Crashes on Ostrich
}
```

---

## ✅ Applying LSP

We separate bird behaviors into logical abstractions so that subclasses only inherit methods they can actually fulfill.

```typescript
class Bird {
  eat() {
    console.log('Eating...');
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log('Flying...');
  }
}

class Eagle extends FlyingBird {}

// Ostrich only inherits methods it supports
class Ostrich extends Bird {
  run() {
    console.log('Running...');
  }
}

function launchFlyingBirds(birds: FlyingBird[]) {
  birds.forEach(b => b.fly()); // Safe, guaranteed to fly!
}
```
