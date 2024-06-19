import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout"
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;