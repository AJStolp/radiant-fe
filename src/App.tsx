import "./App.css";
import Nav from "./components/nav/nav";
import useFetch from "./hooks/api";
import { Routes, Route } from "react-router-dom";
import Home from "./layouts/home";
import { useEffect } from "react";
import { prefersDarkMode } from "./utilities/utilities";
import Services from "./layouts/services";
import About from "./layouts/about";

function App() {
  useEffect(() => {
    if (prefersDarkMode()) {
      document.documentElement.classList.add("dark"); // Apply dark mode globally
    }
  }, []);

  const { fetchedNavData, error } = useFetch({
    url: "http://localhost:1337/api/navigations?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Nav data={fetchedNavData} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
