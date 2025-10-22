// src/components/ContactCard.jsx
export default function ContactCard({ c }) {
    return (
      <article 
        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer" 
        tabIndex={0} 
        aria-label={`Contact ${c.name}`}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.name}</h3>
        <div className="space-y-2">
          {c.company && <p className="text-gray-600 flex items-center gap-2">🏢 {c.company}</p>}
          {c.email && <p className="text-gray-600 flex items-center gap-2">📧 {c.email}</p>}
          {c.phone && <p className="text-gray-600 flex items-center gap-2">📞 {c.phone}</p>}
        </div>
      </article>
    );
  }
  