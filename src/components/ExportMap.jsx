import { useEffect, useState } from "react";
import { config } from "../config";

export default function ExportMap() {
  const [markup, setMarkup] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/images/world-map.svg")
      .then((response) => response.text())
      .then((text) => {
        if (cancelled) return;
        const start = text.indexOf("<svg");
        setMarkup(start >= 0 ? text.slice(start) : "");
      })
      .catch(() => {
        if (!cancelled) setMarkup("");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div
        className="export-map"
        role="img"
        aria-label="World map with Narmada Motors export countries highlighted"
      >
        {markup ? (
          <div dangerouslySetInnerHTML={{ __html: markup }} />
        ) : (
          <div className="h-64 animate-pulse rounded-2xl bg-line" />
        )}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {config.countries.map((country) => (
          <li
            key={country}
            className="rounded-full bg-orange/10 px-3 py-1 text-sm font-semibold text-navy"
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}
