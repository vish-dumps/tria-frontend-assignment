
# Basic functions (what this project provides)
- Contact list CRUD:
  - Create: add new contacts with name, phone, email, and optional notes.
  - Read: view a list of contacts and details for a selected contact.
  - Update: edit existing contact information using a modal form.
  - Delete: remove contacts using a dedicated Delete button (red).
  - Search and filter: quick search by name, phone, or email.
- Persistence: contacts are stored locally (localStorage) so data remains between sessions (unless you clear storage).
- Small, focused component structure: components for list, form, and details to keep UI logic isolated and testable.

## Why these tools are used
- Vite
  - Fast dev server with HMR (hot module replacement). Great for quick iteration.
  - Minimal configuration and fast builds for modern browsers.
- React
  - Declarative UI and component-based structure that fits a contact-list app well.
  - Manage state easily with hooks (useState/useEffect).
- ESLint
  - Enforces code quality and consistent style. Helps catch bugs early.
- @vitejs/plugin-react or @vitejs/plugin-react-swc
  - Provide React Fast Refresh integration in Vite.
  - plugin-react uses Babel (stable, feature rich); plugin-react-swc uses SWC (faster compilation).
  - Choose plugin based on preference for compilation speed vs. plugin ecosystem compatibility.

## Recommended patterns used in this project
- Functional components with React hooks (useState, useEffect).
- Centralized small component responsibilities: List, Form, Details.
- localStorage for simple persistence without a backend; swap to an API later with effect hooks.
- Basic validation on forms (required name/phone or email) to keep data sane.

## How to run locally
1. Install dependencies:
   - npm:
     - npm install
   - yarn:
     - yarn
2. Start dev server:
   - npm:
     - npm run dev
   - yarn:
     - yarn dev
   The app will be available at the URL shown in the terminal (usually http://localhost:5173).
3. Build for production:
   - npm run build
   - yarn build
4. Preview production build locally:
   - npm run preview
   - yarn preview

## Useful scripts (package.json)
- dev: runs Vite dev server with HMR.
- build: produces a production bundle.
- preview: serve the production bundle locally for verification.
- lint (if configured): run ESLint to check code quality.

## How to use the app (quick guide)
1. Add contact: open "Add" form, fill required fields, submit.
2. Edit contact: click the blue "Edit" button on a contact card, update values, and save.
3. Delete contact: click the red "Delete" button on a contact card to remove it instantly.
4. Search: type in the search box to filter contacts by name, phone, or email in real time.
5. Persistence: data is saved to localStorage automatically after add/edit/delete.

## Notes and next steps
- Replace localStorage with a backend API for multi-device sync.
- Add form validations and unit tests for critical components.
- Consider migrating to TypeScript for stronger type safety.
- UI now uses color-coded buttons for Edit (blue) and Delete (red) actions on each contact card.
