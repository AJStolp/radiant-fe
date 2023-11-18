import Gallery from "../components/gallery/gallery";
import useFetch from "../hooks/use-fetch";

export default function Portfolio() {
  const { fetchedGalleryData, error } = useFetch({
    url: "http://localhost:1337/api/portfolios?populate=*",
  });
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="p-4 p-0-sm max-w-screen-xl m-auto pb-24">
      <Gallery data={fetchedGalleryData} />
    </section>
  );
}
