// src/components/SearchBar.jsx
import { useEffect, useRef } from "react";

export default function SearchBar({ query, onChange, onClear }) {
  const ref = useRef(null);

  useEffect(() => {
    // keyboard shortcut: "/" focuses search
    function onKey(e) {
      if (e.key === "/") {
        e.preventDefault();
        ref.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative mb-6">
      <input
        ref={ref}
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
        placeholder="Search contacts by name…  (press / to focus)"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search contacts"
      />
      {query && (
        <button 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
          onClick={onClear} 
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}