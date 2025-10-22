
# Basic functions (what this project provides)
- Contact list CRUD:
  - Create: add new contacts with name, phone, email, and optional notes.
  - Read: view a list of contacts and details for a selected contact.
  - Update: edit existing contact information using a modal form.
  - Delete: remove contacts using a dedicated Delete button (red).
  - Search and filter: quick search by name, phone, or email.
- Persistence: contacts are stored locally (localStorage) so data remains between sessions (unless you clear storage).
- Small, focused component structure: components for list, form, and details to keep UI logic isolated and testable.

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
- UI now uses color-coded buttons for Edit (blue) and Delete (red) actions on each contact card

## Progress 
v1  - you can search via names
    - you can add contact 
v2  - you can now search with names, number or email
    - you can now delete contacts and edit them as well

### How to run locally
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





