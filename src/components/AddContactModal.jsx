// src/components/AddContactModal.jsx
import { useEffect, useRef, useState } from "react";

function AddContactModal({ open, onClose, onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [err, setErr] = useState(null);
  const first = useRef(null);

  useEffect(() => {
    if (open) {
      setName(initialData?.name || "");
      setEmail(initialData?.email || "");
      setPhone(initialData?.phone || "");
      setCompany(initialData?.company || "");
      setErr(null);
      setTimeout(() => first.current?.focus(), 0);
    }
  }, [open, initialData]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setErr("Name is required");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setErr("Email or Phone is required");
      return;
    }
    setErr(null);
    await onSubmit({ name: name.trim(), email: email.trim(), phone: phone.trim(), company: company.trim() });
    onClose();
  }

  function stop(e) {
    e.stopPropagation();
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Add contact modal"
    >
      <form 
        className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-full max-w-md shadow-xl" 
        onClick={stop} 
        onSubmit={handleSubmit}
      >
  <h2 className="text-2xl font-bold text-white mb-6">{initialData ? "Edit Contact" : "Add Contact"}</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Name*</label>
            <input 
              id="name" 
              ref={first} 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="phone">Phone</label>
            <input 
              id="phone" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
            <input 
              id="email" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="company">Company</label>
            <input 
              id="company" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
            />
          </div>
        </div>
        
        {err && <p className="text-red-400 text-sm mt-3">{err}</p>}
        
        <div className="flex gap-3 mt-6">
          <button 
            type="button" 
            className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContactModal;
