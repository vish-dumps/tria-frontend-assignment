// src/components/ContactCard.jsx
import { useState } from "react";

// Derive a consistent, random-looking HSL color from a string (name).
// This keeps the same color for the same contact across renders while
// producing varied hues for different names.
function getColorFromName(name) {
  if (!name) return 'hsl(220 60% 45%)';
  // simple string hash
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // convert to 32bit integer
  }
  const hue = Math.abs(hash) % 360; // 0 - 359
  // Use fairly saturated, mid-lightness HSL for pleasant avatar colors
  return `hsl(${hue} 65% 50%)`;
}

export default function ContactCard({ c, onDelete, onEdit }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article 
      className={`bg-gray-800 border border-gray-700 rounded-lg transition-all duration-200 cursor-pointer hover:bg-gray-750 ${
        isExpanded ? 'shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={handleClick}
      tabIndex={0} 
      aria-label={`Contact ${c.name}`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: getColorFromName(c.name) }}
            >
              {c.name ? c.name.charAt(0).toUpperCase() : '?'}
            </div>
            <div>
              <h3 className="text-white font-medium">{c.name}</h3>
              {c.phone && (
                <p className="text-gray-400 text-sm">{c.phone}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isExpanded && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.(c);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors"
                  aria-label="Edit contact"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.(c.id);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors"
                  aria-label="Delete contact"
                >
                  Delete
                </button>
              </>
            )}
            <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
            {c.email && (
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">📧</span>
                <span className="text-gray-300">{c.email}</span>
              </div>
            )}
            {c.company && (
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">🏢</span>
                <span className="text-gray-300">{c.company}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
  