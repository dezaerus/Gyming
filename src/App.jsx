import { useState, useEffect } from "react";
import Line from "./components/Line";
import Navbar from "./scenses/Navbar";
import Landing from "./scenses/Landing";
import About from "./scenses/About";
import Classes from "./scenses/Classes";
import Contact from "./scenses/Contact"


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      <div className="mx-auto md:h-full" id="home">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:min-h-full" id="about">
        <About />
      </div>
     <Line />
      <div className="mx-auto md:min-h-full" id="classes">
        <Classes />
      </div>
      <Line />
      <div className="mx-auto md:full" id="contact">
        <Contact />
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
