import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact";
import Batteries from "./components/Batteries";
import About from "./pages/About";
import Tyres from "./components/tyres/Tyres";
import TyresDropdown from "./components/tyres/tyresDropdown";
import Wheels from "./components/Wheels";
import Learn from "./components/Learn";
import "./App.css";
import { FilterProvider } from "./context/FilterContext";
import TyreFullPage from "./components/tyres/TyreFullPage";
import { TyreProvider } from "./context/TyreContext";

function App() {
  return (
    <BrowserRouter>
      <TyreProvider>
        <FilterProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/tyres/batteries" element={<Batteries />} />
            <Route path="/tyres/wheels" element={<Wheels />} />
            <Route path="/tyres" element={<Tyres />} />
            <Route path="/tyres/:brand/:slug" element={<TyreFullPage />} />
            <Route path="/tyres/size" element={<TyresDropdown />} />
            <Route path="/tyres/brands" element={<TyresDropdown />} />
            <Route path="/tyres/width" element={<TyresDropdown />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
          <Footer />
        </FilterProvider>
      </TyreProvider>
    </BrowserRouter>
  );
}

export default App;
