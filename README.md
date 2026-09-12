# 🚀 devCore a Technology Stack

A modern and responsive **Development Technology Stack** web application built with React, TypeScript, and Tailwind CSS.

DevStack allows developers to explore popular technologies, view useful information about each technology, and build their own personalized development stack by adding technologies to their stack.

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

# ❓React Project — Questions & Answers

## I. What is JSX, and why is it used in React?

    JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript/TypeScript.

    React uses JSX because it is javaScript based so jsx makes it easy to create a component for UI.

---

## II. What is the difference between Props and State?

###

    The difference between Props and State is that, Props pass data and it can't change data. State store data and if needed it changes.

    Props pass throw component and it can't effect UI, if State changes the UI also change.

###

---

## III. What does the `useState` hook do, and where did you use it in this project?

    useState hook store some value in it. It also returen two value and  stored valu and one set function , which we can set the value to store it.

    In this project when I add a stack , I stor it in state. so, when I need the stack data I can get it from useState value.

---

## IV. What does the `useEffect` hook do, and why did you need it to load the JSON data?

    useEffect hook does some sideeffect , means it fetch data , it connectin eith localstroage. When we need some outside things in react we used useEffect.

    I need it to use for localstroag.So,when i set a stack affter set a new stack i have a side effect.

---

## V. Why does every item in a `.map()` list need a unique `key` prop?

    Every item in a `.map()` list need a unique key prop because react need  to indentify every list . So , if it does not  have uniqe key , react warinig us.

## VI. What is Conditional Rendering?

    Conditional reandering is  to render UI based on some condition. So, some times  we need render some component based on conditon ,like if isAdded true change the button color gray or disabled is not it show its normal color.

---

## VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

    I padd data from a parent component to a child component by passing props .

    And a child  send something back to the parent it does't work like reveres  , means we can't pass props child to parents.
    React is uni direction its always go parent to child, so if we need to pass someting from child  to parents we do props  lifting , means we set a state or hooks to the parent ,but passing reletive props to the child and then child use  the set Metohd to set something then this value can use to parents .

<br>
<br>
## 🌐 Live Demo

🔗 **Live Website:** https://dev-stack-pi.vercel.app
