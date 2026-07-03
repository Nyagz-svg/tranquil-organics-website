import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CartNotice from "./components/CartNotice.jsx";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import HaircareRoutine from "./pages/HaircareRoutine.jsx";
import About from "./pages/About.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import IngredientGlossary from "./pages/IngredientGlossary.jsx";
import HaircareTips from "./pages/HaircareTips.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function SiteRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartNotice />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/routine" element={<HaircareRoutine />} />
          <Route path="/ingredients" element={<IngredientGlossary />} />
          <Route path="/tips" element={<HaircareTips />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SiteRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}
