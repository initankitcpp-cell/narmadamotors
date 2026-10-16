import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, FileText, Ship, Truck, Warehouse } from "lucide-react";
import Seo from "../components/Seo";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import ExportMap from "../components/ExportMap";
import { images } from "../data/images";
import { brands, categories } from "../data/brands";
import { featuredProducts } from "../data/products";
import { clients, testimonials } from "../data/testimonials";
import { config } from "../config";
import { whatsappUrl } from "../lib/whatsapp";

const stats = [
  { value: "Since 2002", label: "Serving highway projects" },
  { value: "5", label: "Regional offices" },
  { value: "10+", label: "Export countries" },
  { value: "5000+", label: "Parts in the range" },
];

const reasons = [
  { icon: BadgeCheck, title: "Genuine parts", text: "OEM and trusted aftermarket lines, matched to the vehicle and part number." },
  { icon: Warehouse, title: "Wide stock", text: "Engine, brake, clutch, filter, hydraulic and undercarriage parts in one inquiry." },
  { icon: Truck, title: "Credit for fleets", text: "Supply arrangements for transporters, contractors and fleet workshops." },
  { icon: Ship, title: "Fast dispatch", text: "Packed from the nearest desk so a stopped machine is not waiting on paperwork." },
  { icon: FileText, title: "Export documents", text: "Invoice, packing list and shipping papers go out with the consignment." },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const quote = testimonials[slide];
  const hasSlides = testimonials.length > 1;

  function move(direction) {
    setSlide((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <>
      <Seo
        title="Genuine Spare Parts for Trucks, Tippers & Heavy Machinery | Narmada Motors"
        description="Search truck, tipper and earthmoving spare parts by brand, model or part number. Narmada Motors, Patna, has supplied the highway industry since 2002."
      />

      <section className="relative bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          <Photo image={images.hero} eager className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/45" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7.5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-orange uppercase">
            Patna · Since {config.established}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Genuine Spare Parts for Trucks, Tippers & Heavy Machinery
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Wholesale supply for fleets and contractors, and export packing for buyers overseas. Tell us the brand, model or part number.
          </p>
          <div className="mt-8 max-w-3xl">
            <SearchBar />
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3 font-semibold text-white hover:bg-orange-dark">
              Request a Quote
            </Link>
            <a
              href={whatsappUrl(config.defaultWhatsAppText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-navy hover:bg-mist"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-navy text-white">
        <Photo image={images.highwayAerial} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-orange sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Brands</p>
          <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">Parts for the trucks you already run</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <Reveal key={brand.slug}>
              <Link to={`/brands/${brand.slug}`} className="group relative block h-52 overflow-hidden rounded-2xl">
                <Photo image={images[brand.image]} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{brand.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-orange">
                    View models <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Categories</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">What you can ask for</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group overflow-hidden rounded-2xl border border-line bg-mist"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo image={images[category.image]} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy">{category.name}</h3>
                  <p className="mt-1 text-sm text-steel">{category.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Sample stock</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">Featured parts</h2>
            <p className="mt-2 max-w-xl text-steel">Demonstration parts for the pitch. Every price is quoted, not listed.</p>
          </div>
          <Link to="/products" className="font-semibold text-orange hover:text-orange-dark">Browse all parts</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Photo image={images.warehouse} className="h-full max-h-[520px] w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Why Narmada</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">A parts desk, not a catalogue maze</h2>
            <ul className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex gap-3">
                  <reason.icon className="mt-0.5 shrink-0 text-orange" size={22} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-navy">{reason.title}</h3>
                    <p className="text-sm text-steel">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-white">
        <Photo image={images.portShip} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Export</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Shipped to ten countries</h2>
            <p className="mt-4 text-white/80">
              Highlighted on the map: the Gulf, East and West Africa, Southern Africa, and two South Asian markets. We do not list countries we have not named as regular destinations.
            </p>
            <Link to="/export" className="mt-6 inline-flex items-center gap-2 font-semibold text-orange">
              See the export process <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-4 text-ink">
            <ExportMap />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-line bg-white py-8" aria-label="Clients">
        <div className="animate-marquee flex items-center gap-16 px-8">
          {[...clients, ...clients, ...clients, ...clients].map((name, index) => (
            <span key={`${name}-${index}`} className="font-display text-2xl font-semibold tracking-[0.2em] text-steel/80 uppercase">
              {name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <Photo image={images.mechanicWrench} className="h-full max-h-[460px] w-full object-cover" />
        </div>
        <figure className="rounded-3xl bg-navy p-8 text-white sm:p-10" aria-roledescription="carousel" aria-label="Client testimonials">
          <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">Client note</p>
          <blockquote className="mt-4 text-xl leading-relaxed sm:text-2xl">“{quote.quote}”</blockquote>
          <figcaption className="mt-6 text-sm text-white/75">
            {quote.name}, {quote.company}
          </figcaption>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={!hasSlides}
              className="rounded-full border border-white/20 p-2 disabled:opacity-40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={!hasSlides}
              className="rounded-full border border-white/20 p-2 disabled:opacity-40"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
            <span className="text-xs text-white/60">
              {slide + 1} / {testimonials.length}
            </span>
          </div>
        </figure>
      </section>

      <section className="relative overflow-hidden">
        <Photo image={images.containers} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-5xl">Send us your requirement, get a quote in hours.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Part name, part number, quantity and destination. We reply on WhatsApp with availability and price.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-xl bg-orange px-6 py-3 font-semibold text-white hover:bg-orange-dark">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
