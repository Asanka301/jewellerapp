import "./App.css";
import Navbar from "./common/Navbar";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { Home, Cart, Shop, Contact } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
