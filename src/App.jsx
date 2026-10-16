import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InquiryProvider } from "./context/InquiryContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
import BrandDetail from "./pages/BrandDetail";
import Export from "./pages/Export";
import Catalogues from "./pages/Catalogues";
import Branches from "./pages/Branches";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <InquiryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="brands" element={<Brands />} />
            <Route path="brands/:slug" element={<BrandDetail />} />
            <Route path="export" element={<Export />} />
            <Route path="catalogues" element={<Catalogues />} />
            <Route path="branches" element={<Branches />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InquiryProvider>
  );
}
