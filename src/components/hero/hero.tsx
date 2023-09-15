import { ReturnedHeroDataProps } from "../../interfaces/returned-data/returned-hero-data";

interface HeroProps<T> {
  data: T;
}

export default function Hero(props: HeroProps<ReturnedHeroDataProps[]>) {
  return (
    <>
      {props.data.map((item, index) => {
        const imageurl = `http://localhost:1337${item.attributes.heroimage.data.attributes.url}`;

        return (
          <div
            key={index}
            className="bg-light-background md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center dark:bg-dark-background"
          >
            <div className="text-center md:w-1/2 p-8">
              <h1 className=" text-light-text dark:text-dark-text text-4xl mb-4">
                {item.attributes.hero.headline}
              </h1>
              <p className="text-light-text dark:text-dark-text  mb-8">
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
                src={imageurl}
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
