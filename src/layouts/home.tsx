import Hero from "../components/hero/hero";
import useFetch from "../hooks/api";

export default function Home() {
  const { fetchedHeroData, error } = useFetch({
    url: "http://localhost:1337/api/heroes?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }
  return <Hero data={fetchedHeroData} />;
}
