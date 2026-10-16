import { Mail, MapPin, Phone } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { images } from "../data/images";
import { config } from "../config";
import { whatsappUrl } from "../lib/whatsapp";

export default function Branches() {
  return (
    <>
      <Seo
        title="Branches | Narmada Motors"
        description="Narmada Motors offices in Patna, Bhopal, Jamshedpur, Varanasi and Delhi. Patna is the head office."
      />
      <PageHero
        eyebrow="Branches"
        title="Five desks, one parts number"
        text="Patna is the head office. The other four desks take the same inquiry and pass it to stock."
        image={images.dispatch}
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 md:grid-cols-2">
        {config.offices.map((office) => (
          <article key={office.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.16em] text-orange uppercase">{office.role}</p>
            <h2 className="mt-2 text-2xl font-semibold text-navy">{office.city}</h2>
            <ul className="mt-4 space-y-3 text-sm text-steel">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <span>{office.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <a className="hover:text-navy" href={whatsappUrl(config.defaultWhatsAppText)} target="_blank" rel="noreferrer">
                  {office.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <a className="hover:text-navy" href={`mailto:${office.email}`}>{office.email}</a>
              </li>
            </ul>
          </article>
        ))}
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-12 text-sm text-steel">
        Street addresses in this sample are placeholders. Replace them in src/config.js before publishing.
      </p>
    </>
  );
}
