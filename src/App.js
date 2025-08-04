import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact";
import Batteries from "./components/Batteries";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tyres/batteries" element={<Batteries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
