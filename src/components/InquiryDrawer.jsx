import { useState } from "react";
import { ClipboardList, Minus, Plus, Trash2, X } from "lucide-react";
import { useInquiry } from "../context/InquiryContext";
import { inquiryMessage, openWhatsApp } from "../lib/whatsapp";

const empty = { name: "", company: "", phone: "", country: "" };

export default function InquiryDrawer() {
  const { items, count, updateQty, removeItem, open, setOpen, notice } = useInquiry();
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function send(event) {
    event.preventDefault();
    if (!items.length) {
      setError("Add at least one part before sending.");
      return;
    }
    if (!form.name.trim() || !form.company.trim() || !form.phone.trim() || !form.country.trim()) {
      setError("Name, company, phone and country are required.");
      return;
    }
    setError("");
    openWhatsApp(inquiryMessage(items, form));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-navy text-white shadow-xl sm:left-6"
        aria-label={`Inquiry cart, ${count} ${count === 1 ? "part" : "parts"}`}
      >
        <ClipboardList size={22} aria-hidden="true" />
        <span className="absolute -top-1 -right-1 grid h-6 min-w-6 place-items-center rounded-full bg-orange px-1 text-xs font-bold">
          {count}
        </span>
      </button>

      {notice ? (
        <p className="fixed bottom-24 left-4 z-40 max-w-xs rounded-xl bg-navy px-4 py-3 text-sm text-white shadow-xl sm:left-6" role="status">
          {notice}
        </p>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[60] flex justify-end bg-navy/50">
          <button type="button" className="h-full flex-1" aria-label="Close inquiry" onClick={() => setOpen(false)} />
          <aside className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl" aria-label="Inquiry list">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-xl font-semibold text-navy">Your inquiry</h2>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-mist" aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="text-sm text-steel">No parts yet. Add a part from the catalogue, then send the list on WhatsApp.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="rounded-xl border border-line p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-navy">{item.name}</p>
                        <p className="text-sm text-steel">{item.brand} · {item.partNo}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-steel hover:text-orange">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-3 inline-flex items-center rounded-full border border-line">
                      <button type="button" className="p-2" aria-label="Decrease quantity" onClick={() => updateQty(item.id, item.qty - 1)}>
                        <Minus size={14} />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                      <button type="button" className="p-2" aria-label="Increase quantity" onClick={() => updateQty(item.id, item.qty + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={send} className="space-y-3 border-t border-line px-5 py-4">
              <Field label="Name" name="name" value={form.name} onChange={update} />
              <Field label="Company" name="company" value={form.company} onChange={update} />
              <Field label="Phone" name="phone" value={form.phone} onChange={update} type="tel" />
              <Field label="Country" name="country" value={form.country} onChange={update} />
              {error ? <p className="text-sm text-orange-dark">{error}</p> : null}
              <button type="submit" className="w-full rounded-xl bg-[#25D366] py-3 font-semibold text-white hover:brightness-95">
                Send on WhatsApp
              </button>
            </form>
          </aside>
        </div>
      ) : null}
    </>
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
        className="mt-1 w-full rounded-xl border border-line px-3 py-2 outline-none focus:border-orange"
      />
    </label>
  );
}
