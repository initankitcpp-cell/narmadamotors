import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { config } from "../config";
import { openWhatsApp, whatsappUrl } from "../lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 5 5 0 0 0 2.8.8 2.4 2.4 0 0 0 1.6-.7 2 2 0 0 0 .4-1.4c0-.2 0-.3-.2-.4z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col items-end gap-3 sm:right-6">
      {open ? (
        <div className="w-72 overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div>
              <p className="font-semibold">Narmada Motors</p>
              <p className="text-xs text-white/70">Quick replies open WhatsApp</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close quick replies" className="rounded-full p-1 hover:bg-white/10">
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2 p-3">
            {config.quickReplies.map((reply) => (
              <button
                key={reply.label}
                type="button"
                onClick={() => openWhatsApp(reply.text)}
                className="w-full rounded-xl bg-mist px-3 py-2.5 text-left text-sm font-medium text-navy hover:bg-orange/10"
              >
                {reply.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-navy shadow-lg"
        aria-expanded={open}
        aria-label="Quick replies"
      >
        <MessageCircle size={20} aria-hidden="true" />
      </button>

      <a
        href={whatsappUrl(config.defaultWhatsAppText)}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
