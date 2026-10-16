import { Link } from "react-router-dom";
import { config } from "../config";
import { whatsappUrl } from "../lib/whatsapp";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-3 text-sm leading-6 text-white/75">
            Wholesale and export supplier of spare parts for trucks, buses, tippers and earthmoving equipment. Head office in {config.hq}, serving the highway industry since {config.established}.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {config.offices.map((office) => (
              <li key={office.id}>
                {office.city}
                {office.role === "Head office" ? " · HQ" : ""}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="text-white/80 hover:text-orange" to="/products">Products</Link></li>
            <li><Link className="text-white/80 hover:text-orange" to="/brands">Brands and models</Link></li>
            <li><Link className="text-white/80 hover:text-orange" to="/export">Export</Link></li>
            <li><Link className="text-white/80 hover:text-orange" to="/catalogues">Catalogues and price lists</Link></li>
            <li><Link className="text-white/80 hover:text-orange" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Talk to us</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a className="hover:text-orange" href={whatsappUrl(config.defaultWhatsAppText)} target="_blank" rel="noreferrer">
                {config.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href={`mailto:${config.email}`}>{config.email}</a>
            </li>
            <li>{config.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} Narmada Motors. Sample website for a redesign pitch. Part numbers and prices on this site are demonstration data.
        </p>
      </div>
    </footer>
  );
}
