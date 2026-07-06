---
title: Introduction to SOLID
sidebar_position: 1
---

# 📐 SOLID Principles

SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. 

These principles were promoted by Robert C. Martin (Uncle Bob) and are fundamental to writing clean object-oriented code, particularly in large-scale Angular and TypeScript applications at **Bits Solution**.

---

## The Five Principles

Click on any principle to explore its definition, code examples, and details:

### 1. [S - Single Responsibility Principle (SRP)](/docs/bits-societe/solid/srp)
A class should have one, and only one, reason to change. Each class should do exactly one job.

### 2. [O - Open/Closed Principle (OCP)](/docs/bits-societe/solid/ocp)
Software entities should be open for extension, but closed for modification. You can add new features without changing existing code.

### 3. [L - Liskov Substitution Principle (LSP)](/docs/bits-societe/solid/lsp)
Subtypes must be substitutable for their base types without altering application correctness. Derived classes must follow the contracts of their parent classes.

### 4. [I - Interface Segregation Principle (ISP)](/docs/bits-societe/solid/isp)
Clients should not be forced to depend on interfaces they do not use. Prefer many small, specific interfaces to a single generic one.

### 5. [D - Dependency Inversion Principle (DIP)](/docs/bits-societe/solid/dip)
Depend on abstractions, not on concretions. High-level modules should not depend on low-level modules; both should depend on interfaces.
