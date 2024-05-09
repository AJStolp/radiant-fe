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
    <section className="max-w-screen-2xl m-auto">
      <Hero data={fetchedHomeData} />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly pb-24 px-8">
        <div className="mb-4 md:w-1/2 h-1/2">
          <MapComponent />
        </div>
        {fetchedHomeData.map((val) => (
          <div className="text-center p-8 md:w-1/2 " key={val.id}>
            <p className="light-text-light dark:text-light-accent font-bold ">
              Our Hours: {""}
            </p>
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
                  p: ({ node, ...props }) => (
                    <p className="text-base" {...props} />
                  ),
                }}
              >
                {val.attributes.hoursofoperation}
              </ReactMarkdown>
            </span>
            <p className="light-text-light dark:text-light-accent font-bold pt-8">
              Our Phone Number:{""}
            </p>
            <span className="text-light-text dark:text-dark-text">
              {" "}
              <a
                href={`tel:${val.attributes.phonenumber}`}
                aria-label="Call us at: 1(906)250-5372"
              >
                {val.attributes.phonenumber}
              </a>
            </span>
            <p className="light-text-light dark:text-light-accent font-bold pt-8 text-xl">
              Our Address:{" "}
            </p>
            {isIOS ? (
              <span className="text-light-text dark:text-dark-text">
                <a
                  href={`maps://?q=${encodeURIComponent(
                    val.attributes.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-base"
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
    </section>
  );
}
