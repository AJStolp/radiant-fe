import MapComponent from "../components/map/map";
import Hero from "../components/hero/hero";
import useFetch from "../hooks/use-fetch";

export default function Home() {
  const { fetchedHomeData, error } = useFetch({
    url: "/api/homes?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }
  {
    console.log(fetchedHomeData, "fetched data");
  }
  return (
    <>
      <Hero data={fetchedHomeData} />
      <div className="bg-light-background md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center dark:bg-dark-background">
        <div className="md:w-1/2 mb-4">
          <MapComponent />
        </div>
        <div className="text-center md:w-1/2 p-8">
          <p className="text-light-text dark:text-dark-text mb-8">Our Hours:</p>
          <p className="text-light-text dark:text-dark-text mb-8">
            Our Address
          </p>
        </div>
      </div>
    </>
  );
}
