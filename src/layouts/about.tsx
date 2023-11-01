import useFetch from "../hooks/use-fetch";

export default function About() {
  const { fetchedAboutData, error } = useFetch({
    url: "/api/abouts?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }
  {
    console.log(fetchedAboutData, "FAD");
  }
  return (
    <section className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto pt-16">
      {fetchedAboutData.flatMap((item, outerIndex) => {
        return item.attributes.teaminfo.map((team, innerIndex) => (
          <div key={`${outerIndex}-${innerIndex}`}>
            <div className="text-center text-light-text dark:text-dark-text">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl  tracking-tight dark:text-white">
                {team.name}
              </h3>
              <p>{team.about}</p>
            </div>
          </div>
        ));
      })}
    </section>
  );
}
