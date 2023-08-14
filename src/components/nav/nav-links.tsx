interface NavLinkProps {
  attributes: {
    home: string;
    services: string;
    about: string;
  };
}

export default function NavLink(props: NavLinkProps) {
  return (
    <>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-light-background dark:bg-dark-background md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-light-background md:dark:bg-dark-background dark:border-dark-accent">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-light-text bg-light-primary rounded md:bg-transparent md:text-light- md:dark:text-dark-accent"
          >
            {props.attributes.home}
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="block py-2 pl-3 pr-4 text-light-text bg-light-primary rounded md:bg-transparent md:text-light-primary md:dark:text-dark-accent"
          >
            {props.attributes.services}
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="block py-2 pl-3 pr-4 text-light-text bg-light-primary rounded md:bg-transparent md:text-light-primary md:dark:text-dark-accent"
          >
            {props.attributes.about}
          </a>
        </li>
      </ul>
    </>
  );
}
