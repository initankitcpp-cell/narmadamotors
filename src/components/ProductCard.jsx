import { Plus } from "lucide-react";
import { images } from "../data/images";
import { useInquiry } from "../context/InquiryContext";
import Photo from "./Photo";

export default function ProductCard({ product }) {
  const { addItem } = useInquiry();
  const image = images[product.imageKey];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <Photo
          image={image}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-wide text-orange uppercase">
          {product.brand}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-navy">{product.name}</h3>
        <p className="mt-2 text-sm text-steel">
          {product.model} · {product.category}
        </p>
        <p className="mt-1 font-mono text-sm text-ink">Part no. {product.partNo}</p>
        <p className="mt-3 text-sm font-semibold text-navy">Price on request</p>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
        >
          <Plus size={16} aria-hidden="true" />
          Add to Inquiry
        </button>
      </div>
    </article>
  );
}
