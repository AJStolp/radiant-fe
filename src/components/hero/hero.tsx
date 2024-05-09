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
            className="pb-12 md:pb-24 flex flex-col-reverse lg:flex-row items-center justify-center"
          >
            <div className="text-center  sm:p-8">
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
            <div className="p-4 md:pt-12">
              <img
                src={imageUrl}
                // src="/assets/radiant-hero-600.png"
                alt={item.attributes.heroimage.data.attributes.alternativeText}
                // className="w-full md:h-full rounded"
                className="w-full h-full md:w-[600px] md:h-[600px] rounded"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
