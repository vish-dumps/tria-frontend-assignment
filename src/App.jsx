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
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tria Contacts</h1>
          <p className="text-gray-600">{contacts.length} total</p>
        </div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={() => setModalOpen(true)}
        >
          Add contact
        </button>
      </header>

      <SearchBar query={query} onChange={setQuery} onClear={() => setQuery("")} />

      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading contacts…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {query ? <>No results for "{query}"</> : <>No contacts yet. Add your first contact.</>}
        </div>
      ) : (
        <section className="grid gap-4" aria-live="polite">
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
  );
}
