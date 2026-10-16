import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import { images } from "../data/images";
import { brands } from "../data/brands";

export default function Brands() {
  return (
    <>
      <Seo
        title="Brands and Models | Narmada Motors"
        description="Tata, Ashok Leyland, BharatBenz, Mahindra, Eicher, Volvo, Scania and construction-equipment parts from Narmada Motors."
      />
      <PageHero
        eyebrow="Brands"
        title="Models we quote against"
        text="Pick a brand, then a model. Volvo, Scania and construction equipment are quoted from the chassis or machine number."
        image={images.tipper}
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:grid-cols-2">
        {brands.map((brand) => (
          <Link key={brand.slug} to={`/brands/${brand.slug}`} className="group grid overflow-hidden rounded-2xl bg-white shadow-sm sm:grid-cols-[180px_1fr]">
            <div className="aspect-[16/10] overflow-hidden sm:aspect-auto">
              <Photo image={images[brand.image]} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-navy">{brand.name}</h2>
              <p className="mt-2 text-sm text-steel">{brand.summary}</p>
              {brand.models.length ? (
                <p className="mt-3 text-sm text-ink">{brand.models.join(" · ")}</p>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                Open brand <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
