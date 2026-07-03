import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

export default function CartNotice() {
  const { cartNotice, clearCartNotice } = useCart();

  useEffect(() => {
    if (!cartNotice) return undefined;

    const timer = window.setTimeout(clearCartNotice, 3200);
    return () => window.clearTimeout(timer);
  }, [cartNotice, clearCartNotice]);

  if (!cartNotice) return null;

  return (
    <div className="cart-notice" role="status" aria-live="polite">
      <AlertCircle size={17} />
      {cartNotice}
    </div>
  );
}
