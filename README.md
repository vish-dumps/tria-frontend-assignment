# Tria Contact Manager

A modern, responsive contact management application built with React and Vite. Created as part of the Tria frontend internship assignment.

## 🌟 Features
- Contact list CRUD:
  - Create: add new contacts with name, phone, email, and optional notes.
  - Read: view a list of contacts and details for a selected contact.
  - Update: edit existing contact information using a modal form.
  - Delete: remove contacts using a dedicated Delete button (red).
  - Search and filter: quick search by name, phone, or email.
- Persistence: contacts are stored locally (localStorage) so data remains between sessions (unless you clear storage).
- Small, focused component structure: components for list, form, and details to keep UI logic isolated and testable.
- Avatar initials: contact cards show initials with a consistent random-looking background color generated from the contact name.

## How to use the app (quick guide)
1. Add contact: open "Add" form, fill required fields, submit.
2. Edit contact: click the blue "Edit" button on a contact card, update values, and save.
3. Delete contact: click the red "Delete" button on a contact card to remove it instantly.
4. Search: type in the search box to filter contacts by name, phone, or email in real time.
5. Persistence: data is saved to localStorage automatically after add/edit/delete.

## Progress 
- v1  - you can search via names
     - you can add contact 
- v2  - you can now search with names, number or email
     - you can now delete contacts and edit them as well
- v3   -changes UI to dark themed minimal, and modern

## 🔗 Live Demo
The application is deployed and can be accessed here: [Tria Contact Manager](https://tria-frontend-assignment.vercel.app/)

## 🛠️ Tech Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Modern build tool for faster development
- **TailwindCSS**: Utility-first CSS framework for styling
- **localStorage**: For data persistence without backend
- **UI Avatars API**: For generating contact avatars

## 🎯 Design Choices & Assumptions

1. **Dark Theme**: Chose a dark theme for reduced eye strain and modern aesthetics
2. **Component Structure**:
   - `ContactCard`: Displays individual contact information
   - `AddContactModal`: Handles both adding and editing contacts
   - `SearchBar`: Unified search across name, email, and phone
3. **Data Storage**: Used localStorage for persistence, assuming this is a client-side demo
4. **Avatar Generation**: Integrated UI Avatars for visual representation of contacts

> Note on AI assistance: I used AI developer tools selectively to speed up small tasks (like utility prototypes and suggestions). Every suggestion was reviewed, adapted, and tested by me — final design and code decisions reflect my judgment and coding style. AI was a productivity aid, not a substitute for technical judgment.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vish-dumps/tria-frontend-assignment.git
cd tria-frontend-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production
```bash
npm run build
# or
yarn build
```

## 📝 Author
- **Vishwas Soni** (Roll: 23ME10098)
- GitHub: [@vish-dumps](https://github.com/vish-dumps)

## 🔜 Future Improvements
1. Backend Integration for multi-device sync
2. TypeScript migration for better type safety
3. Advanced contact features (groups, favorites)
4. Add Picture Option
