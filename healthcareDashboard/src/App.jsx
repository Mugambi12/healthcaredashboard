import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState("");
  const [loginError, setLoginError] = useState("");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowNavbar(false);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    setShowSidebar(false);
  };

  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");

    if (storedCredentials) {
      setIsLoggedIn(true);
      setCredentials(storedCredentials);
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      localStorage.setItem("credentials", credentials);

      setIsLoggedIn(true);
      setCredentials(credentials);
      setLoginError("");
    } catch (error) {
      setLoginError("Incorrect credentials. Please try again.");
    }
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
      {!isLoggedIn && (
        <LoginModal onLogin={handleLogin} loginError={loginError} />
      )}
      {isLoggedIn && (
        <>
          <Navbar
            toggleSidebar={toggleSidebar}
            show={showNavbar}
            toggleNavbar={toggleNavbar}
          />
          <Dashboard
            toggleSidebar={toggleSidebar}
            show={showSidebar}
            credentials={credentials}
          />
        </>
      )}
    </>
  );
}

export default App;
