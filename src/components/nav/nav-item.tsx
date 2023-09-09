import { Link } from "react-router-dom";

interface NavLinkProps {
  attributes: {
    navitem: [{ id: number; title: string }];
  };
}

export default function NavItem(props: NavLinkProps) {
  return (
    <>
      <ul className="flex flex-col p-4 md:p-0 mt-4border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-light-background md:dark:bg-dark-background dark:border-dark-accent">
        {props.attributes.navitem.map((item, index) => {
          return (
            <li key={item.id}>
              <Link
                to={item.title}
                className="block py-2 pl-3 pr-4 text-light-text dark:text-dark-text uppercase"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
