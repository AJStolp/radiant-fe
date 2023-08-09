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
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          >
            {props.attributes.home}
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          >
            {props.attributes.services}
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          >
            {props.attributes.about}
          </a>
        </li>
      </ul>
    </>
  );
}
