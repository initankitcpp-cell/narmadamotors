import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { images } from "../data/images";
import { config } from "../config";
import { contactMessage, openWhatsApp } from "../lib/whatsapp";

const empty = {
  name: "",
  company: "",
  phone: "",
  email: "",
  country: "",
  vehicle: "",
  part: "",
  quantity: "1",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const hq = config.offices[0];

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const required = ["name", "company", "phone", "email", "country", "vehicle", "part", "quantity"];
    if (required.some((key) => !String(form[key]).trim())) {
      setError("Fill in every field except the message, which is optional.");
      setSent(false);
      return;
    }
    setError("");
    openWhatsApp(contactMessage(form));
    setSent(true);
  }

  return (
    <>
      <Seo
        title="Contact Narmada Motors"
        description="Send a spare-parts inquiry to Narmada Motors. The form opens WhatsApp with your part, quantity and contact details."
      />
      <PageHero
        eyebrow="Contact"
        title="Send the requirement"
        text="The form opens WhatsApp with a formatted quote request. Nothing is stored on a server."
        image={images.mechanicLight}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={update} />
            <Field label="Company" name="company" value={form.company} onChange={update} />
            <Field label="Phone" name="phone" value={form.phone} onChange={update} type="tel" />
            <Field label="Email" name="email" value={form.email} onChange={update} type="email" />
            <Field label="Country" name="country" value={form.country} onChange={update} />
            <Field label="Vehicle / Brand" name="vehicle" value={form.vehicle} onChange={update} />
            <Field label="Part name / number" name="part" value={form.part} onChange={update} />
            <Field label="Quantity" name="quantity" value={form.quantity} onChange={update} type="number" min="1" />
          </div>
          <label className="mt-4 block text-sm font-medium text-navy">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={4}
              className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 outline-none focus:border-orange"
            />
          </label>
          {error ? <p className="mt-3 text-sm text-orange-dark">{error}</p> : null}
          {sent ? <p className="mt-3 text-sm text-navy">WhatsApp should be open with your inquiry. If it did not, allow pop-ups and send again.</p> : null}
          <button type="submit" className="mt-5 rounded-xl bg-orange px-5 py-3 font-semibold text-white hover:bg-orange-dark">
            Send on WhatsApp
          </button>
        </form>
        <aside className="rounded-3xl bg-navy p-6 text-white sm:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-orange uppercase">Head office</p>
          <h2 className="mt-2 text-2xl font-semibold">{hq.city}</h2>
          <p className="mt-3 text-white/80">{hq.address}</p>
          <p className="mt-4">{config.whatsappDisplay}</p>
          <p>{config.email}</p>
          <p className="mt-2 text-sm text-white/70">{config.hours}</p>
        </aside>
      </div>
    </>
  );
}

function Field({ label, name, value, onChange, type = "text", min }) {
  return (
    <label className="block text-sm font-medium text-navy">
      {label}
      <input
        name={name}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 outline-none focus:border-orange"
      />
    </label>
  );
}
