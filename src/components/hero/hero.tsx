import { ReturnedHeroDataProps } from "../../interfaces/returned-data/returned-hero-data";

interface HeroProps<T> {
  data: T;
}

export default function Hero(props: HeroProps<ReturnedHeroDataProps[]>) {
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-light-background min-h-screen flex flex-col-reverse md:flex-row items-center justify-center dark:bg-dark-background"
          >
            <div className="text-center md:w-1/2 md:p-8">
              <h1 className="text-light-text dark:text-dark-text text-4xl font-bold mb-4">
                {item.attributes.headline}
              </h1>
              <p className="text-light-text dark:text-dark-text text-lg mb-8">
                {item.attributes.subheadline}
              </p>
              <a
                href="#"
                className="text-dark-text dark:text-dark-text bg-light-primary hover:bg-light-accent focus:ring-4 focus:outline-none focus:ring-light-secondary font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-dark-primary dark:hover:bg-dark-accent dark:focus:ring-dark-secondary"
              >
                {item.attributes.CTA}
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="src/assets/hair-salon.png"
                alt="Hero Image"
                className="w-full h-auto md:h-full"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
