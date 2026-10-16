import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ClipboardList, Mail, Menu, Phone, X } from "lucide-react";
import { config } from "../config";
import { useInquiry } from "../context/InquiryContext";
import { whatsappUrl } from "../lib/whatsapp";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/export", label: "Export" },
  { to: "/catalogues", label: "Catalogues" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useInquiry();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <p>Serving the highway industry since {config.established}</p>
          <div className="hidden items-center gap-4 sm:flex">
            <a className="inline-flex items-center gap-1.5 hover:text-orange" href={`mailto:${config.email}`}>
              <Mail size={14} aria-hidden="true" />
              {config.email}
            </a>
            <a
              className="inline-flex items-center gap-1.5 hover:text-orange"
              href={whatsappUrl(config.defaultWhatsAppText)}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={14} aria-hidden="true" />
              {config.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center" aria-label="Narmada Motors, home" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? "text-orange" : "text-navy hover:text-orange"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-full border border-line p-2 text-navy hover:border-orange"
              aria-label={`Open inquiry list, ${count} ${count === 1 ? "part" : "parts"}`}
            >
              <ClipboardList size={20} />
              {count > 0 ? (
                <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-xs font-bold text-white">
                  {count}
                </span>
              ) : null}
            </button>
            <Link
              to="/contact"
              className="hidden rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white hover:bg-orange-dark sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="rounded-full border border-line p-2 text-navy lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-line px-4 py-3 lg:hidden" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium ${isActive ? "bg-mist text-orange" : "text-navy"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
