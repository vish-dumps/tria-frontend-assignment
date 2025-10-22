// src/api.js

// This is the mock contact data structure
export const LS_KEY = "tria_contacts_v1";

// Helper function to simulate a network delay
function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

// Read contacts from localStorage, or seed if not available
function readStore() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return seed();
  try {
    return JSON.parse(raw);
  } catch {
    return seed();
  }
}

// Write the updated contact list to localStorage
function writeStore(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

// Seed initial contacts in localStorage
function seed() {
  const initial = [
    { id: crypto.randomUUID(), name: "Aisha Khan", email: "aisha@acme.com", phone: "9876543210", company: "Acme", createdAt: new Date().toISOString() },
    { id: crypto.randomUUID(), name: "Rohan Mehta", email: "rohan@globex.com", phone: "9998887776", company: "Globex", createdAt: new Date().toISOString() },
    { id: crypto.randomUUID(), name: "Diya Sharma", email: "diya@initech.com", phone: "9876501234", company: "Initech", createdAt: new Date().toISOString() }
  ];
  writeStore(initial);
  return initial;
}

// Get contacts with a delay to simulate network latency
export async function getContacts() {
  await sleep(300);
  return readStore();
}

// Add a new contact and update the localStorage
export async function addContact(input) {
  await sleep(300);
  const list = readStore();
  const contact = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
  const next = [contact, ...list];
  writeStore(next);
  return contact;
}
