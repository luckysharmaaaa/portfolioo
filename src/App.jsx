import React, { useEffect } from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initializing AOS with professional settings
    Aos.init({
      duration: 1000, // Slightly slower for a more premium feel
      once: false, 
      easing: "ease-out-back", // Better "pop" effect for tech portfolios
      offset: 100, // Starts animation 100px before the element is in view
    });

    // Refreshing AOS on hash change to ensure animations trigger after scrolling
    const handleHashChange = () => {
      Aos.refresh();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    // Added a wrapper div with 'bg-[#0a0a0a]' to ensure no white flashes during scroll
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-purple-500/30">
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="skillSets">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;