import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "narmada-inquiry";
const InquiryContext = createContext(null);

function readCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && item.id && item.name && item.partNo);
  } catch {
    return [];
  }
}

export function InquiryProvider({ children }) {
  const [items, setItems] = useState(readCart);
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const api = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);

    function addItem(product) {
      setItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          );
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            partNo: product.partNo,
            qty: 1,
          },
        ];
      });
      setNotice(`${product.name} added to your inquiry`);
    }

    function updateQty(id, qty) {
      setItems((prev) => {
        if (qty < 1) return prev.filter((item) => item.id !== id);
        return prev.map((item) => (item.id === id ? { ...item, qty } : item));
      });
    }

    function removeItem(id) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }

    function clear() {
      setItems([]);
    }

    return { items, count, addItem, updateQty, removeItem, clear, open, setOpen, notice };
  }, [items, open, notice]);

  return <InquiryContext.Provider value={api}>{children}</InquiryContext.Provider>;
}

export function useInquiry() {
  const value = useContext(InquiryContext);
  if (!value) throw new Error("useInquiry must be used within InquiryProvider");
  return value;
}
