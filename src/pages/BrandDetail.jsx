import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { images } from "../data/images";
import { brandBySlug } from "../data/brands";
import { products } from "../data/products";

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = brandBySlug(slug);

  if (!brand) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-3xl font-semibold text-navy">Brand not listed</h1>
        <Link to="/brands" className="mt-4 inline-block font-semibold text-orange">Back to brands</Link>
      </div>
    );
  }

  const slugs = brand.productSlugs || [brand.slug];
  const related = products.filter((product) => slugs.includes(product.brandSlug));

  return (
    <>
      <Seo
        title={`${brand.name} Spare Parts | Narmada Motors`}
        description={`${brand.summary} Request a quote from Narmada Motors in Patna.`}
      />
      <PageHero eyebrow="Brand" title={brand.name} text={brand.summary} image={images[brand.image]} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        {brand.models.length ? (
          <>
            <h2 className="text-2xl font-semibold text-navy">Models</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {brand.models.map((model) => (
                <li key={model}>
                  <Link
                    to={`/products?brand=${brand.slug}&model=${encodeURIComponent(model)}`}
                    className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-orange"
                  >
                    {model}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {brand.equipment ? (
          <>
            <h2 className="text-2xl font-semibold text-navy">Equipment lines</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {brand.equipment.map((name) => (
                <li key={name}>
                  <Link
                    to={`/products?brand=${name.toLowerCase()}`}
                    className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-orange"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-2xl text-steel">
              Send the machine model with the part name. We have not published a model list here.
            </p>
          </>
        ) : null}

        {!brand.models.length && !brand.equipment ? (
          <p className="max-w-2xl text-steel">
            Share the chassis number or model with the part number. We quote Volvo and Scania from that, rather than from a fixed model grid.
          </p>
        ) : null}

        <h2 className="mt-12 text-2xl font-semibold text-navy">Sample parts</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
