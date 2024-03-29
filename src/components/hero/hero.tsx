import { ReturnedHomeDataProps } from "../../interfaces/returned-data/returned-home-data";

interface HeroProps<T> {
  data: T;
}

export default function Hero(props: HeroProps<ReturnedHomeDataProps[]>) {
  return (
    <>
      {props.data.map((item, index) => {
        const imageUrl = `${item.attributes.heroimage.data.attributes.url}`;

        return (
          <div
            key={index}
            className="pb-12 md:pb-24 flex flex-col-reverse md:flex-row items-center justify-center"
          >
            <div className="text-center md:w-1/2 p-8">
              <h1 className=" text-light-text dark:text-dark-text text-4xl mb-4 font-bold">
                {item.attributes.hero.headline}
              </h1>
              <p className="text-light-text dark:text-dark-text mb-8">
                {item.attributes.hero.subheadline}
              </p>
              <a
                href="https://booking.mangomint.com/187467"
                className="text-dark-text bg-light-primary p-4 hover:bg-light-accent dark:hover:bg-light-accent cta"
              >
                {item.attributes.hero.CTA}
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src={imageUrl}
                alt={item.attributes.heroimage.data.attributes.alternativeText}
                className="w-full h-auto md:h-full"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
