import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { catalogueMessage, openWhatsApp } from "../lib/whatsapp";

const empty = { name: "", company: "", phone: "", brand: "" };

export default function CatalogueForm({ brand, onClose }) {
  const [form, setForm] = useState({ ...empty, brand: brand || "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setForm({ ...empty, brand: brand || "" });
    setError("");
  }, [brand]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.phone.trim() || !form.brand.trim()) {
      setError("Name, company, phone and brand are required.");
      return;
    }
    openWhatsApp(catalogueMessage(form));
    onClose();
  }

  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/60 p-4 sm:items-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        aria-labelledby="catalogue-title"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-orange uppercase">
              Catalogue request
            </p>
            <h2 id="catalogue-title" className="mt-1 text-2xl font-semibold text-navy">
              {brand}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-steel hover:bg-mist"
            aria-label="Close catalogue form"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-3 text-sm text-steel">
          We send the current catalogue on WhatsApp. No file is downloaded from this page.
        </p>
        <div className="mt-5 space-y-3">
          <Field label="Name" name="name" value={form.name} onChange={update} />
          <Field label="Company" name="company" value={form.company} onChange={update} />
          <Field label="Phone" name="phone" value={form.phone} onChange={update} type="tel" />
          <Field label="Brand" name="brand" value={form.brand} onChange={update} />
        </div>
        {error ? <p className="mt-3 text-sm text-orange-dark">{error}</p> : null}
        <button
          type="submit"
          className="mt-5 w-full rounded-xl bg-orange py-3 font-semibold text-white hover:bg-orange-dark"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <label className="block text-sm font-medium text-navy">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 outline-none focus:border-orange"
      />
    </label>
  );
}
