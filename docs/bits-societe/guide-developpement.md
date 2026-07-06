---
title: Development Guide
sidebar_position: 2
---

# 📝 Development Guide & Coding Standards

This guide details the coding standards, quality metrics, and best practices applied at **Bits Solution**.

---

## 🚀 Mandatory Developer Checklist

Every code change, pull request, or architectural design must respect the following core requirements:

### 1. Leverage Design Patterns
- Code structure must follow established software engineering design patterns.
- Do not reinvent structural or behavioral solutions; utilize the catalog of **[25 Design Patterns](/docs/bits-societe/design-patterns/)** (such as Factory, Builder, Observer, and Repository) to maintain clear separation and loose coupling.

### 2. Focus on State Management (SignalStore)
- Do not use arbitrary state variables or complex manual behavior subjects.
- For both local component state and global application state, use **NGRX SignalStore** (following Angular's modern signals architecture). State changes should be reactive, immutable, and easy to trace.

### 3. Maintain High Unit Testing Coverage
- Every feature, form input validator, UI layout, and component state must be validated using unit and integration tests (Jasmine/Karma).
- Interactions with the DOM in tests must use Angular Material's **ComponentHarness** (e.g. `MatSelectHarness`, `MatInputHarness`) to avoid relying on unstable CSS classes.

### 4. Respect CI/CD Workflows (GitHub Actions)
- All code branches must pass the automated GitHub Actions pipelines before merging to `main`:
  - **Linting & Formatting**: Ensure zero linter warnings.
  - **Testing Pipeline**: Automated testing suite validation.
  - **JetBrains Qodana**: Strict static security and code quality checks.
  - **Documentation deployment**: Auto-compilation and deployment of documentation pages upon push.
  - Read more in the **[Software Architecture & GitHub Actions](/docs/bits-societe/architecture)** guide.

---

## 📐 General Principles

- **Clean Code**: Code must be readable, self-documenting, and simple. Avoid premature optimization.
- **KISS** (*Keep It Simple, Stupid*): Prefer straightforward, clear solutions.
- **DRY** (*Don't Repeat Yourself*): Refactor code into pure functions and shared services.

---

## 🎨 Angular Standards (v17+)

We follow modern guidelines set by the Angular team:

### A. Standalone Components
All components, directives, and pipes must be declared with `standalone: true`.

### B. Signal-First (Reactive State)
- Use **Angular Signals** for local reactive state management in components.
- Favor `input()`, `model()`, `computed()`, and `effect()`.

```typescript
readonly index = input.required<number>();
readonly item = model.required<QuestionItemModel>();
```

### C. Change Detection Strategy
- All UI library components must be configured with `changeDetection: ChangeDetectionStrategy.OnPush` to optimize change detection performance.
