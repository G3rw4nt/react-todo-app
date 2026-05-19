# React Todo App

A focused task management app built with React, Vite, Tailwind CSS and Zustand. The project is intentionally small, but it demonstrates clean component composition, global state management, persisted tasks, derived sorting logic and accessible form controls.

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
- Persist tasks in `localStorage` with Zustand middleware.
- Display a clear empty state when there are no tasks.
- Show a task counter with correct Polish word forms.
- Keep priority configuration in one shared constants file.

## Tech Stack

- React 19
- Zustand 5
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
    useTaskStore.js
  utils/
    getTaskWord.js
  App.jsx
  main.jsx
```

## Architecture Notes

The app keeps task-related state and actions inside a Zustand store:

```txt
useTaskStore
  -> stores tasks
  -> adds tasks
  -> deletes tasks
  -> toggles completion
  -> persists tasks in localStorage
```

`App.jsx` stays responsible for composing the screen, while components read only the store values or actions they need. The task list derives its sorted view from the stored tasks, keeping the persisted data simple. Priority metadata is centralized in `src/constants/priorities.js`, so labels, sorting order and visual styles are defined in one place instead of being duplicated across components.

Zustand persistence is configured with the `persist` middleware:

```txt
localStorage key: todo-tasks
```

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

Tasks are sorted with the shared `sortTasks` helper from `useTaskStore.js`:

1. By priority order: `High`, `Normal`, `Low`.
2. Alphabetically by description for tasks with the same priority.

The sorted list is derived in the UI instead of being stored separately.

### Priority Control

The priority selector is implemented as a real radio group, visually styled as a segmented control. This keeps the form state predictable while still providing a compact, polished interface.

## Current Scope

This version stores tasks in Zustand and persists them to `localStorage`, so refreshing the browser keeps the task list. Natural next improvements would be editing tasks, filtering by completion status, clearing completed tasks or syncing data with a backend API.
