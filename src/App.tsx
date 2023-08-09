import "./App.css";
import Nav from "./components/nav/nav";
import useFetch from "./hooks/api";

function App() {
  const { fetchedData, error } = useFetch({
    url: "http://localhost:1337/api/navigations",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Nav data={fetchedData} />
    </>
  );
}

export default App;
