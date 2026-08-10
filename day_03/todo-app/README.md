# The Ledger — To-Do List Web Application

A responsive to-do list web app built with vanilla HTML5, CSS3, and JavaScript (ES6), using the Local Storage API to persist tasks in the browser. Built for Novexa Technologies — Full Stack Development, Task 3.

## Features

- **Add New Task** — file a new entry with a priority (Routine / Important / Urgent)
- **Edit Existing Task** — revise text and priority in a modal dialog
- **Mark Complete / Reopen** — toggle a task's settled state
- **Delete Task** — remove an entry permanently
- **Persistence** — all tasks are saved to `localStorage` and reload automatically
- **Filtering** — view All / Open / Settled tasks
- **Clear Settled** — bulk-remove completed tasks
- **Responsive design** — works on mobile and desktop
- **Accessible** — visible keyboard focus states, reduced-motion support

## Project Structure

```
todo-app/
├── index.html   # Markup
├── style.css    # Styling
├── script.js    # CRUD logic + Local Storage
└── README.md
```

## Tools Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- Visual Studio Code
- Git & GitHub

## How to Run

No build step or server required.

1. Download/clone this folder.
2. Open `index.html` directly in any modern browser.

Or serve it locally:

```bash
npx serve .
```

## How It Works

- Tasks are stored as an array of objects in `localStorage` under the key `ledger.tasks.v1`.
- Each task has: `id`, `text`, `priority`, `done`, `createdAt`.
- `render()` re-draws the list from the current `tasks` array on every change, so the UI always reflects storage.
- CRUD operations (`addTask`, `updateTask`, `deleteTask`, `clearDone`) mutate the array, then call `persist()`, which saves to Local Storage and re-renders.

## Concepts Demonstrated (Interview Prep)

- **Local Storage** — `localStorage.setItem` / `getItem` to persist data across sessions
- **Local Storage vs Session Storage** — Local Storage persists after the tab/browser closes; Session Storage clears when the tab closes
- **CRUD** — Create (add task), Read (render list), Update (edit/toggle), Delete (remove task)
- **The DOM** — dynamically building and updating list markup with `innerHTML` and event delegation
- **JavaScript Events** — `submit`, `click`, `change`, `keydown` handlers driving all interactivity

## Deploying a Live Demo (Optional)

Push this folder to a GitHub repository, then enable **GitHub Pages** (Settings → Pages → deploy from `main` branch), or drag the folder into **Netlify** / **Vercel** for instant hosting.
