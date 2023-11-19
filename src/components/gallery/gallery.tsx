import { useState } from "react";

// Define your interfaces here, if they are not already defined elsewhere
interface ImageFormat {
  url: string;
}

interface ImageAttributes {
  alternativeText?: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface GalleryItem {
  id: number;
  title?: string;
  description?: string;
  image: {
    data: ImageData;
  };
}

interface GalleryAttributes {
  galleryitem: GalleryItem[];
}

interface PortfolioItem {
  id: number;
  attributes: GalleryAttributes;
}

interface GalleryProps {
  data: PortfolioItem[];
}

export default function Gallery(props: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (image: GalleryItem) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getRandomBounceClass = (id: number) => {
    const variations = [
      "animate-bounce-variation1",
      "animate-bounce-variation2",
    ]; // Add more variations if needed
    const randomIndex = Math.floor(Math.random() * variations.length);
    return variations[randomIndex];
  };
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {props.data.map((portfolioItem) =>
          portfolioItem.attributes.galleryitem.map((galleryItem, index) => {
            const imageUrl =
              galleryItem.image.data.attributes.formats.small.url;
            const imageAlt =
              galleryItem.image.data.attributes.alternativeText ||
              "Gallery image";
            const bounceClass = getRandomBounceClass(galleryItem.id);
            const animationDelay = `${(index % 5) * 0.5}s`; // Staggered delay
            return (
              <div
                key={galleryItem.id}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer ${bounceClass}`}
                onClick={() => openModal(galleryItem)}
                style={{ animationDelay: animationDelay }}
              >
                <img
                  className="h-auto max-w-full w-full rounded-lg shadow-lg"
                  src={imageUrl}
                  alt={imageAlt}
                />
              </div>
            );
          })
        )}
      </div>

      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="flex flex-col md:flex-row items-center md:items-start ">
              <div className="md:w-1/2">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={selectedImage.image.data.attributes.formats.small.url}
                  alt={
                    selectedImage.image.data.attributes.alternativeText ||
                    "Gallery image"
                  }
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 self-center text-center">
                <h3 className="text-lg leading-6 font-medium">
                  {selectedImage.title}
                </h3>
                <p className="text-sm">{selectedImage.description}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white dark:text-dark-text text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-light-accent"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
