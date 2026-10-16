import { config } from "../config";

export function whatsappUrl(text) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text) {
  window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
}

export function inquiryMessage(items, contact) {
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} | Brand: ${item.brand} | Part No: ${item.partNo} | Qty: ${item.qty}`,
  );
  return [
    "Hello Narmada Motors, I want a quote for:",
    ...lines,
    `Name: ${contact.name} Company: ${contact.company} Country: ${contact.country}`,
  ].join("\n");
}

export function contactMessage(form) {
  return [
    "Hello Narmada Motors, I want a quote for:",
    `1. ${form.part} | Brand: ${form.vehicle} | Part No: ${form.part} | Qty: ${form.quantity}`,
    `Name: ${form.name} Company: ${form.company} Country: ${form.country}`,
    `Phone: ${form.phone} Email: ${form.email}`,
    form.message ? `Message: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function catalogueMessage(form) {
  return [
    `Hello Narmada Motors, please share the catalogue for ${form.brand}.`,
    `Name: ${form.name} Company: ${form.company} Phone: ${form.phone}`,
  ].join("\n");
}
