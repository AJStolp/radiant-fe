import useFetch from "../hooks/use-fetch";

export default function About() {
  const { fetchedAboutData, error } = useFetch({
    url: "/api/abouts?populate[0]=teaminfo&populate[1]=teaminfo.employeephoto&populate[2]=teaminfo.employeephoto.media",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="grid gap-12 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-4 lg:m-auto lg:pt-16 px-4 pb-28">
      {fetchedAboutData.flatMap((item, outerIndex) => {
        return item.attributes.teaminfo.map((team, innerIndex) => {
          // Construct the image URL for each team member
          const imageUrl = `${team.employeephoto.data.attributes.url}`;

          return (
            <section
              key={`${outerIndex}-${innerIndex}`}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-dark-secondary dark:border-gray-700"
            >
              <figure>
                <img
                  className="rounded-t-lg"
                  src={imageUrl}
                  alt={`${team.name} Avatar`}
                />
              </figure>
              <div className="p-5">
                <figcaption>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white gradient-text">
                    {team.name}
                  </h2>
                  <p className="mb-3 text-base text-light-text dark:text-dark-text">
                    {team.about}
                  </p>
                </figcaption>
              </div>
            </section>
          );
        });
      })}
    </section>
  );
}
