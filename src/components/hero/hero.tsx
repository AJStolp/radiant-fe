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
              <h1 className=" text-light-text dark:text-dark-text text-4xl mb-4">
                {item.attributes.headline}
              </h1>
              <p className="text-light-text dark:text-dark-text  mb-8">
                {item.attributes.subheadline}
              </p>
              <a
                href="https://booking.mangomint.com/187467"
                className="text-dark-text bg-light-primary p-4 hover:bg-light-accent dark:hover:bg-light-accent"
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
