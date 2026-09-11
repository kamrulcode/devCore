# 🚀 DevStack — Development Technology Stack

A modern and responsive **Development Technology Stack** web application built with React, TypeScript, and Tailwind CSS.

DevStack allows developers to explore popular technologies, view useful information about each technology, and build their own personalized development stack by adding technologies to their stack.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add your live deployment URL here]

🔗 **GitHub Repository:** [Add your GitHub repository URL here]

---

## 📸 Preview

![DevStack Preview](./public/images/devstack-preview.png)

> A clean, modern developer-focused interface for exploring and organizing your technology stack.

---

## ✨ Features

### 1. 🔍 Explore Technologies

Browse a collection of popular development technologies organized by categories such as:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

Each technology card provides useful information including its icon, description, rating, difficulty level, and category.

---

### 2. 🧩 Build Your Own Stack

Add technologies to your personal development stack with a single click.

Once a technology is added:

- The **Add to Stack** button becomes disabled.
- The technology appears in the **Your Stack** section.
- Duplicate technologies cannot be added.
- Technologies can be removed from the stack.
- Removing a technology makes its button available again.

---

### 3. 🎨 Dynamic Technology Themes

Each technology has its own visual theme based on its brand identity.

The technology data contains dynamic values for:

- Icon color
- Background color
- Border color
- Glow effect

This allows the UI to automatically adapt its colors based on the selected technology while maintaining a consistent design system.

---

## 🛠️ Technologies Used

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| ⚛️ React.js       | Building the user interface       |
| 📘 TypeScript     | Type-safe JavaScript development  |
| 🎨 Tailwind CSS   | Styling and responsive design     |
| 🌐 JSON           | Storing technology data           |
| ⚡ Vite           | Development server and build tool |
| 🔔 React-Toastify | User notifications                |
| 🧩 React Hooks    | State and side-effect management  |

---

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
│
├── features/
│   ├── technologies/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   │
│   └── stack/
│       ├── components/
│       ├── hooks/
│       └── types/
│
├── pages/
│   ├── Home/
│   └── Technologies/
│
├── types/
├── hooks/
├── utils/
├── styles/
├── App.tsx
└── main.tsx
```
