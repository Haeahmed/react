import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Checkout from "./Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/react" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
