# Modal Component (React)

A lightweight, accessible, and reusable confirmation modal component for React applications.

[![npm](https://img.shields.io/npm/v/modal-mtdev2024)](https://www.npmjs.com/package/modal-mtdev2024)
[![license](https://img.shields.io/npm/l/modal-mtdev2024)](LICENSE)

---

## Features

- Controlled visibility (`isOpen`)
- Close on:
  - Overlay click
  - Escape key press
  - Close button click
- Optional title support
- Fully composable content via `children`
- Clean and minimal API
- Built with React hooks (`useEffect`, `useCallback`)
- ARIA attributes for accessibility (`role="dialog"`, `aria-modal`, `aria-labelledby`)

---

## Installation

```bash
npm install modal-mtdev2024
```

or

```bash
yarn add modal-mtdev2024
```

---

## Usage

```jsx
import { useState } from "react";
import Modal from "modal-mtdev2024";
import "modal-mtdev2024/style.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation"
      >
        <p>Example</p>
      </Modal>
    </>
  );
}
```

---

## Props

| Prop       | Type        | Required | Description                           |
|------------|-------------|----------|---------------------------------------|
| `isOpen`   | `boolean`   | Yes      | Controls the visibility of the modal  |
| `onClose`  | `function`  | Yes      | Callback triggered when modal closes  |
| `children` | `ReactNode` | Yes      | Content inside the modal              |
| `title`    | `string`    | No       | Optional modal title                  |

---

## Behavior

- Clicking outside the modal (overlay) closes it
- Pressing the `Escape` key closes it
- Clicking inside the modal does **not** close it (event propagation is stopped)
- Modal is not rendered at all when `isOpen` is `false`

---

## Styling

The component comes with a default stylesheet. Import it in your project:

```jsx
import "modal-mtdev2024/style.css";
```

Override the default styles using these CSS classes:

```css
.modal-overlay { }
.modal-content { }
.modal-title { }
.modal-close { }
```

---

## Implementation Details

- Uses `useEffect` to handle global keyboard events
- Uses `useCallback` to prevent unnecessary re-renders
- Cleans up event listeners properly to avoid memory leaks

---

## Improvements to consider

- Trap focus inside the modal
- Manage initial focus when opening
- Add `sr-only` support for screen readers

---

## Type Documentation

Props are documented using JSDoc comments directly in the source code.
No runtime type checking dependency required.

---

## License

MIT © 2026 Michael Takbou

---

## Author

Michael Takbou · [LinkedIn](https://www.linkedin.com/in/michael-takbou/) · [Malt](https://www.malt.fr/profile/michaeltakbou)
