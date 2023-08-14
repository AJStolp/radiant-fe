import Hero from "../components/hero/hero";
import useFetch from "../hooks/api";

export default function Home() {
  const { fetchedData, error } = useFetch({
    url: "http://localhost:1337/api/heroes",
  });
  if (error) {
    return <p>{error}</p>;
  }
  return <Hero data={fetchedData} />;
}
