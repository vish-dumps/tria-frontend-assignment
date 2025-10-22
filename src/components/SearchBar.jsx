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
    <div className="searchWrap">
      <div className="searchInput">
        <span className="icon" aria-hidden>
          {/* simple magnifier SVG */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <input
          ref={ref}
          className="input"
          placeholder="Search by name, email, or phone…  (press / to focus)"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search contacts"
        />
        {query ? (
          <button className="clear" onClick={onClear} aria-label="Clear search">
            ×
          </button>
        ) : (
          <span className="hint">/</span>
        )}
      </div>
    </div>
  );
}
