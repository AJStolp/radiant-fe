import { useEffect, useState } from "react";
import { NavProps } from "../../interfaces/nav";
import { ReturnedNavDataProps } from "../../interfaces/returned-data/returned-nav-data";
import { Button, Navbar } from "flowbite-react";

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
    <>
      {}
      <Navbar
        fluid
        rounded
        className={
          scrolled
            ? onScrollStyles
            : "z-20 bg-light-background dark:bg-dark-background w-full border-b border-light-secondary dark:border-dark-accent"
        }
      >
        <Navbar.Brand href="/home">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="src/assets/radiant-logo.png"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a
            href="https://booking.mangomint.com/187467"
            className="text-dark-text bg-light-primary p-2 md:p-4 hover:bg-light-accent dark:hover:bg-light-accent"
          >
            {callToAction}
          </a>
          {/* <Button>Get started</Button> */}
          <Navbar.Toggle />
        </div>
        {props.data.map((item, outterIndex) => {
          return item.attributes.navitem.map((navItem, innerIndex) => {
            return (
              <Navbar.Collapse key={navItem.id}>
                <Navbar.Link className="uppercase" href={navItem.title}>
                  {navItem.title}
                </Navbar.Link>
              </Navbar.Collapse>
            );
          });
        })}
      </Navbar>
    </>
  );
}
