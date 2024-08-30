// Nessasary imports - Don't Touch!!!!
import './App.css';
import { Routes, Route} from "react-router-dom";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     Routes to pages - import webpages as react components                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import InterestingBytes from "./pages/InterestingBytes";
import Diversity from "./pages/Diversity";
import YoutubeChannels from "./pages/Recommended/YoutubeChannels"
import Kivy_1 from "./pages/Kivy_Articles/Kivy_1"
import PolicyPrinciples from "./pages/Articles/PolicyPrinciples"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          Main function - add route in same fashion as below                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/interesting_bytes" element={<InterestingBytes />} />
                <Route path="/woke_joke" element={<Diversity />} />
                <Route path="/YoutubeChannels" element={<YoutubeChannels />}/>
        // hello
                <Route path="/kivy_article_1" element={<Kivy_1 />}/>
        //
                <Route path="/Policy_vs_Principles" element={<PolicyPrinciples />} />
            </Routes>
            <br></br>
            <Footer />
        </div>
  );
}
export default App;