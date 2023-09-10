import { ReturnedAccordionDataProps } from "@interfaces/returned-data/returned-accordion-data";
import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import ReactMarkdown from "react-markdown";

interface AccordionProps<T> {
  data: T;
}

export default function RAccordion(
  props: AccordionProps<ReturnedAccordionDataProps[]>
) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (innerIndex: number) => {
    if (openItem === innerIndex) {
      // Clicking on the already open item should close it
      setOpenItem(null);
    } else {
      // Clicking on a new item should open it
      setOpenItem(innerIndex);
    }
  };

  return (
    <>
      {props.data.flatMap((item, outerIndex) => {
        return item.attributes.accordion.map((accordion, innerIndex) => (
          <Accordion
            collapseAll
            key={accordion.id}
            className="my-4 border-dark-text"
          >
            <Accordion.Panel>
              <Accordion.Title
                onClick={() => toggleItem(innerIndex)}
                className={`bg-light-secondary hover:bg-light-secondary hover:underline dark:bg-dark-secondary dark:hover:bg-dark-secondary text-light-text dark:text-dark-text`}
                data-accordion-index={innerIndex}
              >
                {accordion.title}
              </Accordion.Title>
              <Accordion.Content
                className={`${
                  openItem === innerIndex ? "block" : "hidden"
                } bg-light-secondary dark:bg-dark-secondary rounded`}
                data-accordion-index={innerIndex}
              >
                <ReactMarkdown
                  components={{
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-cols-1 sm:grid-cols-2"
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
