# React Todo App

A focused task management app built with React, Vite and Tailwind CSS. The project is intentionally small, but it demonstrates clean component composition, state management with a custom hook, derived sorting logic and accessible form controls.

Live demo: https://gerwant-react-todo-app.netlify.app/

## Features

- Add new tasks through a controlled React form.
- Select task priority with a segmented radio control:
  - high priority
  - normal priority
  - low priority
- Automatically sort tasks by priority, then alphabetically by task description.
- Mark tasks as completed or move them back to active.
- Delete tasks from the list.
- Display a clear empty state when there are no tasks.
- Show a task counter with correct Polish word forms.
- Keep priority configuration in one shared constants file.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9
- JavaScript ES modules

## Project Structure

```txt
src/
  components/
    Header.jsx
    NewTaskForm.jsx
    Task.jsx
    TaskList.jsx
  constants/
    priorities.js
  hooks/
    useTasks.js
  utils/
    getTaskWord.js
  App.jsx
  main.jsx
```

## Architecture Notes

The app keeps task-related logic inside a custom hook:

```txt
useTasks
  -> stores tasks
  -> adds tasks
  -> deletes tasks
  -> toggles completion
  -> returns a sorted task list
```

`App.jsx` stays responsible for composing the screen, while the hook owns task behavior. Priority metadata is centralized in `src/constants/priorities.js`, so labels, sorting order and visual styles are defined in one place instead of being duplicated across components.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd react-todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print a local URL, usually:

```txt
http://localhost:5173
```

Open it in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint checks for the project.

## Implementation Details

### Task Model

Each task contains:

```js
{
  id: "generated-id",
  description: "Task description",
  priority: "High | Normal | Low",
  isFinished: false
}
```

### Sorting

Tasks are sorted in `useTasks.js`:

1. By priority order: `High`, `Normal`, `Low`.
2. Alphabetically by description for tasks with the same priority.

### Priority Control

The priority selector is implemented as a real radio group, visually styled as a segmented control. This keeps the form state predictable while still providing a compact, polished interface.

## Current Scope

This version stores tasks in local React state only. Refreshing the browser resets the list. A natural next improvement would be adding persistence through `localStorage` or a backend API.
