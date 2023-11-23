import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Navbar } from "./Components/Layout/Navbar";
import { Footer } from "./Components/Layout/Footer";
import { Contact } from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { Cart } from "./Cart";
import ProductDetail from "./pages/ProductDetail";
import Slideshow from "./pages/About";
import { CheckoutForm } from "./pages/CheckoutForm";
import { Thanks } from "./pages/Thanks";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <div className="container px-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<Slideshow />} />
              <Route path="/CheckoutForm" element={<CheckoutForm />} />
              <Route path="/Thanks" element={<Thanks />} />

              <Route path="/ProductDetail/:id" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
