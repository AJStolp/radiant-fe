import { GalleryProps } from "@interfaces/gallery";
import { ReturnedGalleryDataProps } from "@interfaces/returned-data/returned-gallery-data";

export default function Gallery(
  props: GalleryProps<ReturnedGalleryDataProps[]>
) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {props.data.map((val) => {
        return (
          <div className="grid gap-4" key={val.id}>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={val.attributes.image.data.attributes.url}
                alt={val.attributes.image.data.attributes.alternativeText}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
