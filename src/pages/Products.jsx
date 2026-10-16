import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { images } from "../data/images";
import { categories } from "../data/brands";
import { products } from "../data/products";

const brandOptions = [...new Map(products.map((product) => [product.brandSlug, product.brand])).entries()];

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const q = params.get("q") || "";
  const brand = params.get("brand") || "";
  const model = params.get("model") || "";
  const category = params.get("category") || "";
  const part = params.get("part") || "";

  function setParam(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key === "brand") next.delete("model");
    setParams(next);
  }

  const models = useMemo(() => {
    const pool = brand ? products.filter((product) => product.brandSlug === brand) : products;
    return [...new Set(pool.map((product) => product.model))].sort();
  }, [brand]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    const partQuery = part.trim().toLowerCase();
    return products.filter((product) => {
      const haystack = `${product.name} ${product.partNo} ${product.brand} ${product.model}`.toLowerCase();
      if (query && !haystack.includes(query)) return false;
      if (partQuery && !product.partNo.toLowerCase().includes(partQuery)) return false;
      if (brand && product.brandSlug !== brand) return false;
      if (model && product.model !== model) return false;
      if (category && product.category !== category) return false;
      return true;
    });
  }, [q, part, brand, model, category]);

  const filters = (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <label className="block text-sm font-medium text-navy">
        Part number
        <input
          value={part}
          onChange={(event) => setParam("part", event.target.value)}
          placeholder="NM-1001"
          className="mt-1 w-full rounded-xl border border-line px-3 py-2 outline-none focus:border-orange"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        Brand
        <select
          value={brand}
          onChange={(event) => setParam("brand", event.target.value)}
          className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 outline-none focus:border-orange"
        >
          <option value="">All brands</option>
          {brandOptions.map(([slug, name]) => (
            <option key={slug} value={slug}>{name}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-navy">
        Model
        <select
          value={model}
          onChange={(event) => setParam("model", event.target.value)}
          className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 outline-none focus:border-orange"
        >
          <option value="">All models</option>
          {models.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend className="text-sm font-medium text-navy">Category</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          <FilterChip active={!category} onClick={() => setParam("category", "")}>All</FilterChip>
          {categories.map((item) => (
            <FilterChip
              key={item.name}
              active={category === item.name}
              onClick={() => setParam("category", item.name)}
            >
              {item.name}
            </FilterChip>
          ))}
        </div>
      </fieldset>
      <button
        type="button"
        onClick={() => setParams(new URLSearchParams())}
        className="text-sm font-semibold text-orange"
      >
        Clear filters
      </button>
    </form>
  );

  return (
    <>
      <Seo
        title="Search Spare Parts | Narmada Motors"
        description="Filter Narmada Motors sample stock by brand, model, category or part number. Prices are quoted on request."
      />
      <PageHero
        eyebrow="Products"
        title="Find a part, then ask for the price"
        text="Filter the sample list by brand, model, category or part number. Add what you need and send it on WhatsApp."
        image={images.warehouse}
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-line bg-white p-5">{filters}</div>
        </aside>
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-steel">
              {results.length} {results.length === 1 ? "part" : "parts"} · Price on request
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold lg:hidden"
              onClick={() => setFiltersOpen((value) => !value)}
            >
              <SlidersHorizontal size={16} aria-hidden="true" />
              Filters
            </button>
          </div>
          {filtersOpen ? <div className="mb-5 rounded-2xl border border-line bg-white p-5 lg:hidden">{filters}</div> : null}
          {q ? <p className="mb-4 text-sm text-navy">Showing matches for “{q}”.</p> : null}
          {results.length === 0 ? (
            <p className="rounded-2xl bg-white p-8 text-steel">No parts match those filters. Clear them or send the number on WhatsApp and we will check.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm ${active ? "bg-navy text-white" : "bg-mist text-navy"}`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
