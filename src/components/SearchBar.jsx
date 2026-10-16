import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/products?q=${encodeURIComponent(value)}` : "/products");
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className="flex w-full items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl"
    >
      <label htmlFor="part-search" className="sr-only">
        Search by brand, model, part name or part number
      </label>
      <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:gap-3 sm:px-3">
        <Search className="shrink-0 text-steel" size={20} aria-hidden="true" />
        <input
          id="part-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Brand or part number"
          className="min-w-0 w-full bg-transparent py-3 text-base text-ink outline-none placeholder:text-steel"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-navy px-4 py-3 font-semibold text-white transition hover:bg-navy-800 sm:px-6"
      >
        <span className="sm:hidden">Search</span>
        <span className="hidden sm:inline">Search parts</span>
      </button>
    </form>
  );
}
