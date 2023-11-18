import "./App.css";
import Nav from "./components/nav/nav";
import useFetch from "./hooks/use-fetch";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./layouts/home";
import { useEffect, useLayoutEffect, useState } from "react";
import { prefersDarkMode } from "./utilities/utilities";
import Services from "./layouts/services";
import About from "./layouts/about";
import Footer from "./components/footer/footer";
import Portfolio from "./layouts/portfolio";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    setIsLoading(() => isLoading === false); // Start with loading animation

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // End loading animation
      clearTimeout(loadingTimeout);
    }, 500); // Adjust the duration as needed

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [location]);

  useEffect(() => {
    if (prefersDarkMode()) {
      document.documentElement.classList.add("dark"); // Apply dark mode globally
    }
  }, []);

  const { fetchedNavData, error } = useFetch({
    url: "/api/navigations?populate=*",
  });

  const { fetchedFooterData } = useFetch({
    url: "api/footers?populate[0]=sociallinks&populate[1]=sociallinks.media",
  });

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      className={`app ${isLoading ? "fade-in-animation" : "fade-in-animation"}`}
    >
      <Nav data={fetchedNavData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Portfolio />} />
      </Routes>
      <Footer data={fetchedFooterData}></Footer>
    </div>
  );
}

export default App;
