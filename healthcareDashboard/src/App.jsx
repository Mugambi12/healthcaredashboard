import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowNavbar(false);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    setShowSidebar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowSidebar(false);
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        show={showNavbar}
        toggleNavbar={toggleNavbar}
      />
      <Dashboard toggleSidebar={toggleSidebar} show={showSidebar} />
    </>
  );
}

export default App;
