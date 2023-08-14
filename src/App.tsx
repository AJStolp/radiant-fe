import "./App.css";
import Nav from "./components/nav/nav";
import useFetch from "./hooks/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/home";
import { useEffect } from "react";
import { prefersDarkMode } from "./utilities/utilities";
import Services from "./layouts/services";

function App() {
  useEffect(() => {
    if (prefersDarkMode()) {
      document.documentElement.classList.add("dark"); // Apply dark mode globally
    }
  }, []);

  const { fetchedData, error } = useFetch({
    url: "http://localhost:1337/api/navigations",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Nav data={fetchedData} />
      <Router>
        {" "}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
