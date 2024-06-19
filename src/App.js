import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;