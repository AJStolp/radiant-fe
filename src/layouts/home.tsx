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
        {fetchedHomeData.map((val, index) => (
          <div className="text-center md:w-1/2 p-8" key={index}>
            <p className="text-dark-accent mb-8">
              Our Hours: {""}
              <span className="text-light-text dark:text-dark-text">
                {val.attributes.hoursofoperation}
              </span>
            </p>
            <p className="text-dark-accent mb-8">
              Our Address: {""}
              <span className="text-light-text dark:text-dark-text underline">
                <a
                  href="https://www.google.com/maps?q=Your+Address+Here"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {val.attributes.address}
                </a>
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
