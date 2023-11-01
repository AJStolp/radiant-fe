import MapComponent from "../components/map/map";
import Hero from "../components/hero/hero";
import useFetch from "../hooks/use-fetch";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const { fetchedHomeData, error } = useFetch({
    url: "/api/homes?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }

  const isIOS = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);

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
                <ReactMarkdown
                  components={{
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                  }}
                >
                  {val.attributes.hoursofoperation}
                </ReactMarkdown>
              </span>
            </p>
            <p className="text-dark-accent">Our Address: </p>
            {isIOS ? (
              <span className="text-light-text dark:text-dark-text">
                <a
                  href={`maps://?q=${encodeURIComponent(
                    val.attributes.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  aria-label="open in apple maps"
                >
                  {val.attributes.address}
                </a>
              </span>
            ) : (
              <span className="text-light-text dark:text-dark-text">
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(
                    val.attributes.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  aria-label="open in google maps"
                >
                  {val.attributes.address}
                </a>
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
