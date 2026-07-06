---
title: Behavioral Patterns
sidebar_position: 4
---

# 🔀 Behavioral Patterns

Behavioral patterns manage algorithms, flow control, and assigning communication responsibilities between objects.

---

## 13. Chain of Responsibility

* **Explanation**: Passes a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or pass it to the next handler in the chain.
* **TypeScript Example**:
```typescript
abstract class Handler {
  next?: Handler;
  
  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }
  
  handle(request: string) { 
    if (this.next) this.next.handle(request); 
  }
}
```

---

## 14. Command

* **Explanation**: Encapsulates a request as a standalone object containing all information about the request. This allows queuing, logging, or undoing operations.
* **TypeScript Example**:
```typescript
interface Command { 
  execute(): void; 
}

class Light {
  turnOn() { console.log('Light is ON'); }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute() { this.light.turnOn(); }
}
```

---

## 15. Interpreter

* **Explanation**: Defines a grammatical representation for a language and an interpreter to evaluate sentences and expressions in that language.
* **TypeScript Example**:
```typescript
interface Expression { 
  interpret(context: string): boolean; 
}

class ContainsExpression implements Expression {
  constructor(private data: string) {}
  interpret(context: string) { return context.includes(this.data); }
}
```

---

## 16. Iterator

* **Explanation**: Provides a way to access elements of a complex collection sequentially without exposing its underlying structure.
* **TypeScript Example**:
```typescript
class NumberIterator {
  private index = 0;
  constructor(private arr: number[]) {}
  
  hasNext(): boolean {
    return this.index < this.arr.length;
  }
  
  next(): number { 
    return this.arr[this.index++]; 
  }
}
```

---

## 17. Mediator

* **Explanation**: Restricts direct communications between objects and forces them to collaborate only through a mediator object, reducing direct dependencies.
* **TypeScript Example**:
```typescript
class DialogMediator {
  notify(sender: object, event: string) {
    if (event === 'click-submit') {
      console.log('Mediator validates form and sends request.');
    }
  }
}
```

---

## 18. Memento

* **Explanation**: Captures and externalizes an object's internal state without violating encapsulation, allowing the object to be restored to this state later (Undo operation).
* **TypeScript Example**:
```typescript
class Memento { 
  constructor(private state: string) {}
  getState() { return this.state; }
}

class Originator {
  private state = '';
  save(): Memento { return new Memento(this.state); }
  restore(m: Memento) { this.state = m.getState(); }
}
```

---

## 19. Observer

* **Explanation**: Establishes a one-to-many dependency relationship: when the main object changes state, all registered observers are notified and updated automatically.
* **TypeScript Example**:
```typescript
class Subject {
  private observers: Function[] = [];
  
  subscribe(fn: Function) { this.observers.push(fn); }
  
  notify(data: any) { 
    this.observers.forEach(fn => fn(data)); 
  }
}
```

---

## 20. State

* **Explanation**: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
* **TypeScript Example**:
```typescript
interface State { handle(): void; }

class DraftState implements State { 
  handle() { console.log('Handling Draft Document'); } 
}

class PublishedState implements State {
  handle() { console.log('Handling Published Document'); }
}
```

---

## 21. Strategy

* **Explanation**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.
* **TypeScript Example**:
```typescript
interface RouteStrategy { 
  buildRoute(a: string, b: string): void; 
}

class WalkingStrategy implements RouteStrategy { 
  buildRoute() { console.log('Route built for walking.'); } 
}

class Navigator {
  constructor(private strategy: RouteStrategy) {}
  setStrategy(s: RouteStrategy) { this.strategy = s; }
}
```

---

## 22. Template Method

* **Explanation**: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses without changing the algorithm's structure.
* **TypeScript Example**:
```typescript
abstract class DataMiner {
  mine() { 
    this.openFile(); 
    this.extractData(); 
  }
  
  abstract openFile(): void;
  abstract extractData(): void;
}
```

---

## 23. Visitor

* **Explanation**: Allows adding new operations or behaviors to a group of classes without modifying their source code.
* **TypeScript Example**:
```typescript
interface Visitor {
  visitCircle(c: Circle): void;
}

class Circle {
  accept(v: Visitor) { v.visitCircle(this); }
}
```
