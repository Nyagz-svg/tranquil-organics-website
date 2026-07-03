import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products.js";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "tranquil-organics-cart";
export const MAX_PRODUCT_QUANTITY = 10;

function getInitialCart() {
  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);
  const [cartNotice, setCartNotice] = useState("");

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((entry) => entry.id === item.id);
          if (!product) return null;

          return {
            ...product,
            quantity: item.quantity,
            lineTotal: product.price * item.quantity,
          };
        })
        .filter(Boolean),
    [cart],
  );

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.lineTotal, 0),
    [cartItems],
  );

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  function addToCart(productId, quantity = 1) {
    const existingItem = cart.find((item) => item.id === productId);
    const currentQuantity = existingItem?.quantity ?? 0;
    const requestedQuantity = currentQuantity + quantity;
    const product = products.find((entry) => entry.id === productId);

    if (requestedQuantity > MAX_PRODUCT_QUANTITY) {
      setCartNotice(
        `${product?.name ?? "Product"}: Maximum quantity reached for this product.`,
      );
    } else {
      setCartNotice("");
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: Math.min(MAX_PRODUCT_QUANTITY, item.quantity + quantity),
              }
            : item,
        );
      }

      return [
        ...currentCart,
        { id: productId, quantity: Math.min(MAX_PRODUCT_QUANTITY, quantity) },
      ];
    });
  }

  function increaseQuantity(productId) {
    addToCart(productId, 1);
  }

  function decreaseQuantity(productId) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
    setCartNotice("");
  }

  function clearCartNotice() {
    setCartNotice("");
  }

  const value = {
    cartItems,
    cartCount,
    cartNotice,
    subtotal,
    total: subtotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    clearCartNotice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
