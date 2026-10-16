import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import { images } from "../data/images";
import { config } from "../config";

const timeline = [
  {
    year: "2002",
    title: "Started in Patna",
    text: "Narmada Motors began supplying spare parts to highway contractors and fleet workshops.",
  },
  {
    year: "Network",
    title: "Five offices",
    text: "Desks in Bhopal, Jamshedpur, Varanasi and Delhi sit alongside the Patna head office.",
  },
  {
    year: "Export",
    title: "Ten regular destinations",
    text: "Parts now move to the Gulf, East and West Africa, Southern Africa, Sri Lanka and Bangladesh.",
  },
  {
    year: "Today",
    title: "Quote by part number",
    text: "Buyers send an indent. The desk replies with availability, price and, for exports, the document set.",
  },
];

const team = [
  { title: "Parts desk", place: "Patna", image: images.mechanicLight, text: "Matches part numbers to Tata, Leyland, BharatBenz, Mahindra and Eicher models." },
  { title: "Export desk", place: "Patna", image: images.containers, text: "Prepares the quote, packing list and shipping papers for overseas orders." },
  { title: "Branch coordination", place: "Four cities", image: images.factory, text: "Bhopal, Jamshedpur, Varanasi and Delhi take local indents and feed them to stock." },
];

const badges = [
  { title: "Genuine sourcing", text: "OEM and named aftermarket lines, not unnamed mixed stock." },
  { title: "Fleet terms", text: "Credit and repeat supply for contractors and transporters." },
  { title: "Documents with the box", text: "Export paperwork travels with the consignment." },
  { title: "One WhatsApp thread", text: "Quote, availability and catalogue requests stay in one chat." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Narmada Motors"
        description="Narmada Motors has supplied truck, tipper and earthmoving spare parts from Patna since 2002."
      />
      <PageHero
        eyebrow="About"
        title="Keeping highway machines moving since 2002"
        text="A Patna parts house for fleets, contractors and overseas workshops."
        image={images.highwayAerial}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <Photo image={images.welder} className="h-full max-h-[480px] w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-navy">The work</h2>
          <p className="mt-4 text-steel">
            Narmada Motors sells spare parts for trucks, buses, tippers and earthmoving equipment. The head office is in {config.hq}. Buyers are fleet owners, highway and mining contractors, and workshops that need a part number answered the same day.
          </p>
          <p className="mt-4 text-steel">
            Stock covers the main Indian heavy-vehicle brands, plus Volvo, Scania and a focused range of undercarriage and hydraulic parts. Export is a regular lane, not a slogan: ten named countries, with documents prepared before the box leaves.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-navy">Timeline</h2>
          <ol className="mt-8 space-y-6 border-l-2 border-orange/40 pl-6">
            {timeline.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-semibold text-orange">{item.year}</p>
                <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-steel">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold text-navy">Desks</h2>
        <p className="mt-2 max-w-2xl text-steel">Role placeholders for the pitch. These are not named staff portraits.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <Photo image={person.image} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-navy">{person.title}</h3>
                <p className="text-sm text-orange">{person.place}</p>
                <p className="mt-2 text-sm text-steel">{person.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-navy py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <article key={badge.title} className="rounded-2xl border border-white/10 p-5">
              <h2 className="text-lg font-semibold">{badge.title}</h2>
              <p className="mt-2 text-sm text-white/75">{badge.text}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
