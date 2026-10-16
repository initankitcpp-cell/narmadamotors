import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <Seo title="Page not found | Narmada Motors" description="This page is not on the Narmada Motors sample site." />
      <h1 className="text-4xl font-semibold text-navy">Page not found</h1>
      <p className="mt-3 text-steel">That address is not part of this sample site.</p>
      <Link to="/" className="mt-6 inline-flex rounded-xl bg-orange px-5 py-3 font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
