import { useEffect, useState } from "react";
import { NavProps } from "../../interfaces/nav";
import { ReturnedNavDataProps } from "../../interfaces/returned-data/returned-nav-data";
import { Navbar } from "flowbite-react";

export default function Nav(props: NavProps<ReturnedNavDataProps[]>) {
  const [scrolled, setScrolled] = useState(false);

  const onScrollStyles =
    "sticky z-20 top-0 left-0 bg-light-background dark:bg-dark-background w-full border-b border-light-secondary dark:border-dark-accent transition-all duration-75 ease-in m-auto rounded-none";

  const callToAction = props.data.map((item) => {
    return item.attributes.cta;
  })[0];

  const logoImageUrls = props.data.map(
    (item) => `${item.attributes.logo.data.attributes.url}`
  );

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
      <Navbar
        fluid
        className={
          scrolled
            ? onScrollStyles
            : "z-20 bg-light-background dark:bg-dark-background w-full border-b border-light-secondary dark:border-dark-accent m-auto"
        }>
        <Navbar.Brand href='/home'>
          {logoImageUrls.map((logoUrl, index) => (
            <img
              key={index}
              alt={`Radiant Hair Salon Logo ${index}`}
              className='mr-3 h-6 sm:h-9'
              src={logoUrl}
            />
          ))}
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <a
            href='https://booking.mangomint.com/187467'
            className='text-dark-text bg-light-primary p-2 md:p-4 hover:bg-light-accent dark:hover:bg-light-accent cta'>
            {callToAction}
          </a>
          <Navbar.Toggle />
        </div>
        {props.data.map((item) => {
          return item.attributes.navitem.map((navItem) => {
            return (
              <Navbar.Collapse key={navItem.id}>
                <Navbar.Link
                  className='uppercase text-light-text dark:text-dark-text rounded-none'
                  href={navItem.title}>
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
