import { ReturnedJumboDataProps } from "../../interfaces/returned-data/returned-jumbo-data";
import ReactMarkdown from "react-markdown";

interface JumbotronProps<T> {
  data: T;
}

export default function Jumbotron(
  props: JumbotronProps<ReturnedJumboDataProps[]>
) {
  return (
    <section className="bg-white dark:bg-dark-background">
      {props.data.map((item, index) => {
        return (
          <div
            className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"
            key={index}
          >
            <ReactMarkdown
              components={{
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-light-text dark:text-dark-text  mb-4 "
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-light-text dark:text-dark-text mb-4"
                    {...props}
                  />
                ),
              }}
            >
              {item.attributes.mainContent}
            </ReactMarkdown>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-light-text dark:text-dark-text bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
                  />
                </svg>
                <ReactMarkdown
                  components={{
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-light-text dark:text-dark-text  mb-4  py-2"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-cols-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                  }}
                >
                  {item.attributes.cuts}
                </ReactMarkdown>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-800 text-xsinline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                >
                  <svg
                    className="w-2.5 h-2.5 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  Code
                </a>
                <ReactMarkdown
                  components={{
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-light-text dark:text-dark-text  mb-4  py-2"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-light-text dark:text-dark-text pb-2"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-cols-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                  }}
                >
                  {item.attributes.color}
                </ReactMarkdown>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-800 text-xsinline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                >
                  <svg
                    className="w-2.5 h-2.5 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  Code
                </a>
                <ReactMarkdown
                  components={{
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-light-text dark:text-dark-text  mb-4  py-2"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-light-text dark:text-dark-text pb-2"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-cols-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                  }}
                >
                  {item.attributes.skinCare}
                </ReactMarkdown>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-800 text-xsinline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                >
                  <svg
                    className="w-2.5 h-2.5 mr-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  Code
                </a>
                <ReactMarkdown
                  components={{
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-light-text dark:text-dark-text  mb-4  py-2"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-light-text dark:text-dark-text pb-2"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="text-light-text dark:text-dark-text grid grid-cols-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="py-2" {...props} />
                    ),
                  }}
                >
                  {item.attributes.stylingAndTreaments}
                </ReactMarkdown>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
