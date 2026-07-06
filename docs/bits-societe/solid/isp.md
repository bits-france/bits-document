---
title: Interface Segregation Principle
sidebar_position: 5
---

# ✂️ Interface Segregation Principle (ISP)

> **Clients should not be forced to depend upon interfaces that they do not use.**

Rather than creating one large, monolithic interface with many methods, split it into several smaller, highly cohesive interfaces.

---

## ❌ Violating ISP

Here, a simple `OldPrinter` is forced to implement a `scan()` method it does not support, resulting in dead code or thrown exceptions.

```typescript
interface SmartDevice {
  print(): void;
  scan(): void;
  fax(): void;
}

class OldPrinter implements SmartDevice {
  print() { console.log('Printing...'); }
  
  // ❌ Bad: OldPrinter does not scan or fax
  scan() { throw new Error('Not supported'); }
  fax() { throw new Error('Not supported'); }
}
```

---

## ✅ Applying ISP

We split the interface into smaller, dedicated segments. Classes now only implement what they actually use.

```typescript
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

// OldPrinter only implements Printer
class OldPrinter implements Printer {
  print() { console.log('Printing...'); }
}

// Modern all-in-one device implements multiple interfaces
class AllInOnePrinter implements Printer, Scanner {
  print() { console.log('Printing...'); }
  scan() { console.log('Scanning...'); }
}
```
