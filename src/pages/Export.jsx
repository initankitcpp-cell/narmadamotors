import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import ExportMap from "../components/ExportMap";
import { images } from "../data/images";
import { config } from "../config";

const steps = [
  { title: "Inquiry", text: "Send the part number, brand, quantity and destination on the form or WhatsApp.", image: images.mechanicLight },
  { title: "Quote", text: "We confirm availability and the price for that shipment. Prices are not fixed on the website.", image: images.tools },
  { title: "Order confirmation", text: "You approve the quote. We freeze the parts against that order.", image: images.packing },
  { title: "Packing", text: "Parts are packed for road or sea, labelled to the invoice lines.", image: images.warehouse },
  { title: "Export documents", text: "Commercial invoice, packing list and the papers the forwarder needs.", image: images.factory },
  { title: "Shipping", text: "The consignment leaves with your forwarder, or we coordinate the handoff.", image: images.portShip },
  { title: "Delivery", text: "You receive the tracking reference and the document set.", image: images.containers },
];

const faqs = [
  {
    q: "Which countries do you export to?",
    a: "UAE, Kenya, Mozambique, Uganda, Nigeria, Ghana, South Africa, Sri Lanka, Bangladesh and Kuwait.",
  },
  {
    q: "How do I get a price?",
    a: "Add parts to an inquiry or use the contact form. We reply with availability and a price for that order. There is no public price list file.",
  },
  {
    q: "What documents come with the shipment?",
    a: "A commercial invoice and packing list, plus the shipping papers agreed for that destination.",
  },
  {
    q: "Can an overseas workshop buy a single part?",
    a: "Yes. Share the part number and quantity. Small orders and fleet indents follow the same quote step.",
  },
];

export default function Export() {
  return (
    <>
      <Seo
        title="Export Spare Parts | Narmada Motors"
        description="How Narmada Motors quotes, packs and ships truck and machinery spare parts to ten countries."
      />
      <PageHero
        eyebrow="Export"
        title="From a part number to a packed shipment"
        text="One desk in Patna handles the quote, the documents and the handoff to shipping."
        image={images.portAerial}
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-[16/8] overflow-hidden">
                <Photo image={step.image} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-orange">0{index + 1}</p>
                <h2 className="mt-1 text-xl font-semibold text-navy">{step.title}</h2>
                <p className="mt-2 text-sm text-steel">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-navy">Countries served</h2>
            <p className="mt-3 text-steel">
              These are the destinations named for regular export. A buyer elsewhere can still send an inquiry; we will say if we can ship there.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold text-navy">
              {config.countries.map((country) => (
                <li key={country} className="rounded-xl bg-white px-3 py-3">{country}</li>
              ))}
            </ul>
          </div>
          <ExportMap />
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-semibold text-navy">Questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-2xl bg-white p-5">
                <summary className="cursor-pointer font-semibold text-navy">{item.q}</summary>
                <p className="mt-3 text-sm text-steel">{item.a}</p>
              </details>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex rounded-xl bg-orange px-5 py-3 font-semibold text-white hover:bg-orange-dark">
            Start an export inquiry
          </Link>
        </div>
      </div>
    </>
  );
}
