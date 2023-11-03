interface FooterProps {
  data: { title: string; link: string; id: number }[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <h3 className="text-light-text dark:text-dark-text text-base">
        Follow Us
      </h3>
      <ul className="flex flex-row">
        {props.data.map((val) => {
          return (
            <li
              className="text-light-text dark:text-dark-text text-base"
              key={val.id}
            >
              <a rel="noopener noreferrer" target="_blank" href={val.link}>
                {val.title}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
