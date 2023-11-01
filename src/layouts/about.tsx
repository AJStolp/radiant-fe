import useFetch from "../hooks/use-fetch";

export default function About() {
  const { fetchedAboutData, error } = useFetch({
    url: "/api/abouts?populate[0]=teaminfo&populate[1]=teaminfo.employeephoto&populate[2]=teaminfo.employeephoto.media",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-4 lg:m-auto lg:pt-16">
      {fetchedAboutData.flatMap((item, outerIndex) => {
        return item.attributes.teaminfo.map((team, innerIndex) => {
          // Construct the image URL for each team member
          const backendUrl = import.meta.env.VITE_BE_API_URL;
          const imageUrl = `${backendUrl}${team.employeephoto.data.attributes.url}`;

          return (
            <div key={`${outerIndex}-${innerIndex}`}>
              <div className="text-center text-light-text dark:text-dark-text">
                <figure>
                  <img
                    className="mx-auto mb-4 w-fit h-fit rounded"
                    src={imageUrl}
                    alt={`${team.name} Avatar`}
                  />
                  <figcaption>
                    <h3 className="mb-1 text-2xl tracking-tight text-light-accent">
                      {team.name}
                    </h3>
                    <p>{team.about}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          );
        });
      })}
    </section>
  );
}
