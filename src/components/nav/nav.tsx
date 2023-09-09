import { useEffect, useState } from "react";
import { NavProps } from "../../interfaces/nav";
import { ReturnedNavDataProps } from "../../interfaces/returned-data/returned-nav-data";
import NavItem from "./nav-item";

export default function Nav(props: NavProps<ReturnedNavDataProps[]>) {
  const [scrolled, setScrolled] = useState(false);

  const onScrollStyles =
    "sticky z-20 top-0 left-0 bg-light-background dark:bg-dark-background w-full border-b border-light-secondary dark:border-dark-accent transition-all duration-75 ease-in";

  const callToAction = props.data.map((item) => {
    return item.attributes.cta;
  })[0];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? onScrollStyles
          : "z-20 bg-light-background dark:bg-dark-background w-full border-b border-light-secondary dark:border-dark-accent"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="src/assets/radiant-logo.png"
            className="h-8 mr-3"
            alt="Radiant Logo"
          />
          <span className="self-center text-2xl  whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex md:order-2">
          <a
            className="text-dark-text bg-light-primary hover:bg-light-accent dark:hover:bg-light-accent px-4 py-2 text-center mr-3 md:mr-0 dark:bg-dark-primary"
            aria-label={""}
            content={callToAction}
            href="https://booking.mangomint.com/187467"
          >
            {callToAction}
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {props.data.map((item, index) => (
            <NavItem
              key={index}
              attributes={{
                navitem: item.attributes.navitem,
              }}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
