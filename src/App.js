// Nessasary imports - Don't Touch!!!!
import './App.css';
import { Routes, Route} from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     Routes to pages - import webpages as react components                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import InterestingBytes from "./pages/InterestingBytes"


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          Main function - add route in same fashion as below                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interesting_bytes" element={<InterestingBytes />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;