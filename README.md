# Employee Management System

A full-featured Employee Management System (EMS) built with React. It supports role-based access for **Admins** and **Employees**, letting admins create and assign tasks while employees track and act on their own task lifecycle — from new task to active, completed, or failed.

## Features

- **Role-based login** — a single login screen routes users to either an Admin dashboard or an Employee dashboard based on their credentials.
- **Admin dashboard**
  - Create new tasks with a title, description, date, and assigned employee.
  - View a performance table of every employee showing their New, Active, Completed, and Failed task counts.
- **Employee dashboard**
  - See task counts at a glance (New, Completed, Active, Failed).
  - New tasks can be **accepted**, moving them into the Active state.
  - Completed and Failed tasks can be **deleted** from the dashboard to free up space, while their counts remain part of the employee's permanent performance record.
- **Persistent state** — all data (employees, admin, and the logged-in session) is stored in the browser's `localStorage`, so data survives page refreshes.
- **Global state via Context API** — employee and admin data is shared across the app through a single `ContextProvider`, avoiding prop drilling for shared state.

## Tech Stack

- **React** (functional components + Hooks)
- **Context API** for global state management
- **Conditional rendering** for role-based routing (no router library — the logged-in user's role determines which dashboard renders)
- **Tailwind CSS** for styling
- **Vite** as the build tool and dev server
- **localStorage** as the persistence layer (no backend/database)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/git-krrishraj/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open the app in your browser at the URL shown in the terminal (typically `http://localhost:5173`).

### Test Credentials

The app seeds itself with sample employee and admin data on first load (via `localStorage`). Check `src/utils/LocalStorage.jsx` for the seed data and exact emails/passwords to log in as either an employee or an admin.

> **Note:** If you update the seed data after already running the app once, you'll need to clear `localStorage` (`localStorage.clear()` in the browser console, or clear site data via DevTools) for the new seed data to take effect, since existing data in `localStorage` takes precedence over the seed file.

## Problems Faced

Building this project surfaced a lot of subtle React and state-management issues, especially around how React tracks changes and how that interacts with `localStorage` as a persistence layer:

- **Stale state from reading immediately after setting it.** `useState` setters don't update state synchronously, so reading state right after calling a setter often returned the old value.
- **Mutation vs. new references.** Directly mutating nested objects/arrays (e.g. `elem.taskCounts.active++`) doesn't change the object's reference, so React's `Object.is` check in `useState`/`useContext` sees "no change" and skips re-rendering — even though the underlying data changed. Fixing this meant consistently rebuilding new objects/arrays with spread syntax and `map` instead of mutating in place.
- **`forEach` vs. `map` for state updates.** Early versions used `forEach` to "update" arrays, which mutates in place and returns `undefined`, silently breaking downstream logic. Switching to `map` (with an explicit fallthrough `return` for unmatched elements) fixed this.
- **Context exposing read-only state.** The Context provider initially only exposed `userData` without its setter, making it impossible for consumers to update global state. Fixing this meant including the setter function in the context's `value`.
- **`localStorage` is not reactive.** Writing to `localStorage` never triggers a React re-render by itself. Every update had to be mirrored into actual React state (via a `useState` setter) for the UI to reflect it — `localStorage` alone only persists data for the *next* page load, not the current render.
- **Index-based identity breaking on deletion.** Tasks were initially matched and referenced by their array index. This broke as soon as deletion was introduced — removing an item shifts every subsequent index, causing later actions to target the wrong task. This was resolved by giving every task a stable, unique `id` (generated with `crypto.randomUUID()`) and matching by `id` instead of position.
- **Keeping multiple sources of truth in sync.** Employee/task data effectively lives in three places at once — the logged-in user's `localStorage` entry, the full `employees` list in `localStorage`, and the `employees` array in Context state. Every update (accepting a task, deleting a task, changing counts) has to update all three consistently, or parts of the UI silently go stale relative to each other.

## Scope of Improvement

- **Backend + database.** Replace `localStorage` with a real backend (e.g. Node/Express + a database) so data isn't tied to a single browser and can be shared across devices/users properly.
- **Authentication.** Current login is a plaintext credential check against seed data. A production version would need hashed passwords and real session/token-based auth.
- **Consolidate the sync logic.** The repeated three-way sync (`loggedInUser` in localStorage, `employees` in localStorage, and Context state) done in every handler could be extracted into a single reusable function to reduce duplication and the risk of forgetting to update one of the three.
- **Task editing.** Currently tasks can be created and deleted, but not edited after creation (e.g. changing the due date or description).
- **Notifications/feedback.** Add toast notifications or similar feedback when a task is accepted, completed, or deleted, instead of relying on immediate UI changes alone.
- **Form validation.** The task creation form currently has no validation (e.g. preventing empty titles or past dates).
- **Pagination/filtering.** As the number of employees or tasks grows, the admin performance table and employee task lists would benefit from search, filtering, and pagination.
- **Testing.** No automated tests currently exist; adding unit tests for the state-update logic (especially the task lifecycle transitions) would help catch regressions given how much of this project's complexity lives in state synchronization.
