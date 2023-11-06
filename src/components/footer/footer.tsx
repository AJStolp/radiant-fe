import { ReturnedFooterDataProps } from "../../interfaces/returned-data/returned-footer-data";
import { FooterProps } from "../../interfaces/footer";

export default function Footer(
  props: FooterProps<ReturnedFooterDataProps[] | undefined>
) {
  const footerData = props.data || [];
  return (
    <footer className="w-full fixed bottom-0 bg-light-background dark:bg-dark-background p-4 border-t border-light-accent dark:border-dark-accent">
      <section className="max-w-screen-xl m-auto">
        <h3 className="text-light-text dark:text-dark-text text-base pb-2 underline">
          Follow us on:
        </h3>
        <ul className="flex flex-row justify-between m-auto">
          {footerData.flatMap((val) =>
            val.attributes.sociallinks.map((item) => (
              <li
                key={item.id}
                className="text-light-text dark:text-dark-text w-6"
              >
                <a href={item.link} target="_blank">
                  <img src={item.media.data.attributes.url} />
                  {/* <p className="text-xs">{item.title}</p> */}
                </a>
              </li>
            ))
          )}
        </ul>
      </section>
    </footer>
  );
}
