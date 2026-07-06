---
title: Introduction to Design Patterns
sidebar_position: 1
---

# 🎨 Design Patterns

Design patterns are typical, reusable solutions to common problems in software design. Rather than direct, copy-pasteable pieces of code, a design pattern is a general concept or template explaining how to solve a structural or behavioral problem in various situations.

This section catalogs the **25 design patterns** used at **Bits Solution**, grouped by their primary purpose: Creational, Structural, Behavioral, and Architectural.

---

## Classification of Design Patterns

We classify patterns into four main categories:

### 1. [Creational Patterns](/docs/bits-societe/design-patterns/creational)
These patterns deal with object creation mechanisms, helping create objects in a manner suitable to their concrete scenarios.
- **Factory Method**: Delegates object instantiation to subclasses.
- **Abstract Factory**: Creates families of related objects without specifying concrete classes.
- **Builder**: Constructs complex objects step-by-step using fluent interfaces.
- **Prototype**: Clones existing objects without depending on their classes.
- **Singleton**: Ensures a class has only one global instance.

### 2. [Structural Patterns](/docs/bits-societe/design-patterns/structural)
These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.
- **Adapter**: Permits incompatible interfaces to work together.
- **Bridge**: Splits an abstraction from its implementation so they can vary independently.
- **Composite**: Composes objects into tree structures to represent part-whole hierarchies.
- **Decorator**: Attaches new behaviors to objects dynamically.
- **Facade**: Provides a simplified interface to a complex set of classes.
- **Flyweight**: Minimizes memory usage by sharing common data across multiple objects.
- **Proxy**: Controls access to an object by acting as a placeholder.

### 3. [Behavioral Patterns](/docs/bits-societe/design-patterns/behavioral)
These patterns focus on communication, algorithms, and assigning responsibilities between objects.
- **Chain of Responsibility**: Passes a request along a chain of potential handlers.
- **Command**: Encapsulates request parameters into an object.
- **Interpreter**: Evaluates language expressions defined in a grammar.
- **Iterator**: Accesses elements of a collection sequentially without exposing its representation.
- **Mediator**: Centralizes complex communications between disparate objects.
- **Memento**: Captures and restores an object's internal state.
- **Observer**: Notifies observers automatically of any state changes.
- **State**: Alters an object's behavior when its internal state changes.
- **Strategy**: Defines a family of algorithms and makes them interchangeable at runtime.
- **Template Method**: Defines the skeleton of an algorithm, deferring steps to subclasses.
- **Visitor**: Separates an algorithm from the object structure it operates on.

### 4. [Architectural Patterns](/docs/bits-societe/design-patterns/architectural)
These patterns concern the overall high-level structural and dependency organization of applications.
- **Repository Pattern**: Decouples data access code from business services.
- **Dependency Injection (DI)**: Injects dependencies from the outside rather than creating them inline.
