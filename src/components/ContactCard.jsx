// src/components/ContactCard.jsx
export default function ContactCard({ c, onDelete, onEdit }) {
  return (
    <article 
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer relative" 
      tabIndex={0} 
      aria-label={`Contact ${c.name}`}
    >
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded"
          aria-label={`Edit contact ${c.name}`}
          onClick={() => onEdit?.(c)}
          title="Edit contact"
        >
          Edit
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded"
          aria-label={`Delete contact ${c.name}`}
          onClick={() => onDelete?.(c.id)}
          title="Delete contact"
        >
          Delete
        </button>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.name}</h3>
      <div className="space-y-2">
        {c.company && <p className="text-gray-600 flex items-center gap-2">🏢 {c.company}</p>}
        {c.email && <p className="text-gray-600 flex items-center gap-2">📧 {c.email}</p>}
        {c.phone && <p className="text-gray-600 flex items-center gap-2">📞 {c.phone}</p>}
      </div>
    </article>
  );
}
  