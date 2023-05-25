import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/index";
import About from "./containers/about/index";
import AppsGames from "./containers/apps&games/index";
import Contact from "./containers/contact/index";
import Gallery from "./containers/gallery/index";
import Music from "./containers/music/index";
import Portfolio from "./containers/portfolio/index";
import Skills from "./containers/skills/index";
import Videos from "./containers/videos/index";
import Navbar from "./components/navBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./helpers/particlesConfig";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const location = useLocation();
  const renderParticleJsForHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* {particles js} */}
      {renderParticleJsForHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      {/* {navbar component} */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* {main page content} */}
      <div className="App__main-content-wrapper">
        <Routes>
          {/* {creat all routes} */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appsgames" element={<AppsGames />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
