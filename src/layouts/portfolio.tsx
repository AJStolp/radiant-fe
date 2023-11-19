import Gallery from "../components/gallery/gallery";
import useFetch from "../hooks/use-fetch";

export default function Portfolio() {
  const { fetchedGalleryData, error } = useFetch({
    url: "/api/portfolios?populate[0]=galleryitem&populate[1]=galleryitem.image",
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
