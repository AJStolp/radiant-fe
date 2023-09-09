import ReactMarkdown from "react-markdown";
import Accordion from "../components/accordion/accordion";
import useFetch from "../hooks/api";

export default function Services() {
  const { fetchedAccordionData, error } = useFetch({
    url: "http://localhost:1337/api/services?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }

  const mainContent = fetchedAccordionData.map((item, index) => {
    return (
      <section key={item.id}>
        <h1 className="text-light-text dark:text-dark-text mb-4 text-4xl py-2">
          {" "}
          {item.attributes.mainContent.heading}
        </h1>
        <ReactMarkdown
          key={item.id}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-light-text dark:text-dark-text mb-4 text-4xl py-2"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-light-text dark:text-dark-text mb-4 py-2 text-xl"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-light-text dark:text-dark-text py-2"
                {...props}
              />
            ),
          }}
        >
          {item.attributes.mainContent.content}
        </ReactMarkdown>
      </section>
    );
  });
  return (
    <section className="p-4 p-0-sm max-w-screen-xl m-auto">
      {mainContent}
      <Accordion data={fetchedAccordionData} />
    </section>
  );
}
