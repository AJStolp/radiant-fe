import Hero from "../components/hero/hero";
import useFetch from "../hooks/use-fetch";

export default function Home() {
  const { fetchedHeroData, error } = useFetch({
    url: "/api/homes?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }
  return <Hero data={fetchedHeroData} />;
}
