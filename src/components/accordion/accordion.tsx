import { ReturnedAccordionDataProps } from "@interfaces/returned-data/returned-accordion-data";
import ReactMarkdown from "react-markdown";
import { Accordion } from "flowbite-react";

interface AccordionProps<T> {
  data: T;
}

export default function RAccordion(
  props: AccordionProps<ReturnedAccordionDataProps[]>
) {
  return (
    <>
      {props.data.flatMap((item, outterIndex) => {
        return item.attributes.accordion.map((accordion, innerIndex) => (
          <Accordion collapseAll className="my-4" key={accordion.id}>
            <Accordion.Panel>
              <Accordion.Title>{accordion.title}</Accordion.Title>
              <Accordion.Content>
                <ReactMarkdown
                  components={{
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-col-1 sm:grid-cols-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-light-text dark:text-dark-text py-2"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-light-accent dark:text-dark-text"
                        {...props}
                      />
                    ),
                  }}
                >
                  {accordion.content}
                </ReactMarkdown>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ));
      })}
    </>
  );
}
