---
title: Open/Closed Principle
sidebar_position: 3
---

# 🔓 Open/Closed Principle (OCP)

> **Software entities (classes, modules, functions) should be open for extension, but closed for modification.**

You should be able to extend the behavior of a class without modifying its existing source code. This prevents regression bugs in already-tested code paths.

---

## ❌ Violating OCP

Here, adding a new discount type (e.g., `SuperVIP`) requires modifying the existing `DiscountManager` class and adding another `if/else` block.

```typescript
class DiscountManager {
  applyDiscount(price: number, customerType: string): number {
    // ❌ Bad: Adding new types requires modifying this code directly
    if (customerType === 'Regular') {
      return price * 0.95;
    } else if (customerType === 'VIP') {
      return price * 0.80;
    }
    return price;
  }
}
```

---

## ✅ Applying OCP

We declare an interface and implement different discount strategies. To add a new type of discount, we simply implement the interface without touching existing code.

```typescript
// Define abstract contract
interface Discount {
  apply(price: number): number;
}

// Open for extension: Implementations are separate classes
class RegularDiscount implements Discount {
  apply(price: number): number {
    return price * 0.95;
  }
}

class VIPDiscount implements Discount {
  apply(price: number): number {
    return price * 0.80;
  }
}

class SuperVIPDiscount implements Discount {
  apply(price: number): number {
    return price * 0.70; // Easy to add, closed for modification!
  }
}

class DiscountManager {
  applyDiscount(price: number, discount: Discount): number {
    return discount.apply(price);
  }
}
```
