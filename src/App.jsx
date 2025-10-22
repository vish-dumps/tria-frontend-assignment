// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import * as api from "./api";
import ContactCard from "./components/ContactCard";
import SearchBar from "./components/SearchBar";
import AddContactModal from "./components/AddContactModal";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 150);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    api.getContacts().then((list) => {
      setContacts(list);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    if (!debounced) return contacts;
    const q = debounced.toLowerCase();
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.toLowerCase().includes(q)
    );
  }, [contacts, debounced]);


  async function handleAdd(input) {
    if (editingContact) {
      // Edit mode
      const updated = await api.editContact(editingContact.id, input);
      setContacts((prev) => prev.map((c) => c.id === updated.id ? updated : c));
      setEditingContact(null);
    } else {
      // Add mode
      const created = await api.addContact(input);
      setContacts((prev) => [created, ...prev]);
    }
  }
  function handleEdit(contact) {
    setEditingContact(contact);
    setModalOpen(true);
  }

  async function handleDelete(id) {
    await api.deleteContact(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-white">Tria Contacts</h1>
            <p className="text-gray-400 text-sm">{contacts.length} total contacts</p>
          </div>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium"
            onClick={() => setModalOpen(true)}
          >
            Add Contact
          </button>
        </header>

        <SearchBar query={query} onChange={setQuery} onClear={() => setQuery("")} />

        {loading ? (
          <div className="text-center py-16 text-gray-400">Loading contacts…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            {query ? <>No results for "{query}"</> : <>No contacts yet. Add your first contact.</>}
          </div>
        ) : (
          <section className="space-y-2" aria-live="polite">
            {filtered.map((c) => (
              <ContactCard key={c.id} c={c} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </section>
        )}

        <AddContactModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditingContact(null);
          }}
          onSubmit={handleAdd}
          initialData={editingContact}
        />
      </div>
      <div className="fixed bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-gray-400 text-sm">
          Created by{' '}
          <a 
            href="https://github.com/vish-dumps/tria-frontend-assignment" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Vishwas Soni
          </a>{' '}
          (Roll: 23ME10098)
        </p>
      </div>
    </div>
  );
}
