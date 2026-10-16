import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import CatalogueForm from "../components/CatalogueForm";
import { images } from "../data/images";
import { brands } from "../data/brands";

export default function Catalogues() {
  const [brand, setBrand] = useState("");

  return (
    <>
      <Seo
        title="Catalogues and Price Lists | Narmada Motors"
        description="Request a Narmada Motors catalogue or price list for Tata, Ashok Leyland, BharatBenz, Mahindra, Eicher, Volvo, Scania or construction equipment."
      />
      <PageHero
        eyebrow="Catalogues"
        title="Ask for the list. We send it to you."
        text="Catalogues and price lists are shared on request. Nothing on this page downloads a file, and printed rates can change."
        image={images.packing}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-[16/9] overflow-hidden">
                <Photo image={images[item.image]} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-navy">{item.name}</h2>
                <p className="mt-2 text-sm text-steel">Catalogue and price list. Price on request.</p>
                <button
                  type="button"
                  onClick={() => setBrand(item.name)}
                  className="mt-4 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  Request Catalogue
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CatalogueForm brand={brand} onClose={() => setBrand("")} />
    </>
  );
}
