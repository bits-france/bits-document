---
title: Structural Patterns
sidebar_position: 3
---

# 🧱 Structural Patterns

Structural patterns explain how to assemble objects and classes into larger, more flexible structures while maintaining efficiency.

---

## 6. Adapter

* **Explanation**: Allows classes with incompatible interfaces to work together by wrapping the legacy interface to match client expectations.
* **TypeScript Example**:
```typescript
class OldSystem { 
  requestOld() { return 'Legacy system data'; } 
}

class Adapter {
  constructor(private oldSys: OldSystem) {}
  
  request(): string { 
    return this.oldSys.requestOld(); 
  }
}
```

---

## 7. Bridge

* **Explanation**: Decouples an abstraction from its implementation so that both can vary independently. It replaces inheritance with object composition.
* **TypeScript Example**:
```typescript
interface Device {
  isEnabled(): boolean;
}

class Radio implements Device {
  isEnabled() { return true; }
}

class RemoteControl {
  constructor(protected device: Device) {}
  
  togglePower() {
    if (this.device.isEnabled()) {
      console.log('Power Off');
    }
  }
}
```

---

## 8. Composite

* **Explanation**: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and groups uniformly.
* **TypeScript Example**:
```typescript
interface Graphic {
  draw(): void;
}

class LeafGraphic implements Graphic {
  draw() { console.log('Draw Leaf'); }
}

class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];
  
  add(g: Graphic) { this.children.push(g); }
  
  draw() {
    this.children.forEach(c => c.draw());
  }
}
```

---

## 9. Decorator

* **Explanation**: Attaches new behaviors to objects dynamically by wrapping them, without subclassing or modifying the original class.
* **TypeScript Example**:
```typescript
class SimpleCoffee { 
  getPrice() { return 10; } 
}

class MilkDecorator {
  constructor(private coffee: SimpleCoffee) {}
  
  getPrice() { 
    return this.coffee.getPrice() + 2; 
  }
}
```

---

## 10. Facade

* **Explanation**: Provides a simplified, high-level interface to a complex and large subsystem of classes.
* **TypeScript Example**:
```typescript
class CPU { freeze() {} }
class HardDrive { read() {} }

class ComputerFacade {
  private cpu = new CPU();
  private hd = new HardDrive();
  
  start() { 
    this.cpu.freeze(); 
    this.hd.read(); 
  }
}
```

---

## 11. Flyweight

* **Explanation**: Shares common data properties across many similar objects to reduce memory consumption.
* **TypeScript Example**:
```typescript
class ParticleType {
  constructor(public color: string, public sprite: string) {}
}

class ParticleFactory {
  private static types = new Map<string, ParticleType>();
  
  static getType(color: string, sprite: string): ParticleType {
    const key = `${color}_${sprite}`;
    if (!this.types.has(key)) {
      this.types.set(key, new ParticleType(color, sprite));
    }
    return this.types.get(key)!;
  }
}
```

---

## 12. Proxy

* **Explanation**: Acts as an intermediary or placeholder for another object to control access, perform lazy loading, caching, or security checks.
* **TypeScript Example**:
```typescript
class RealImage { 
  display() { console.log('Displaying Image'); } 
}

class ProxyImage {
  private realImage?: RealImage;
  
  display() { 
    if (!this.realImage) {
      this.realImage = new RealImage(); // Lazy Loading
    }
    this.realImage.display(); 
  }
}
```
