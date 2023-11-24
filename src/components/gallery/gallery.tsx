import { useState, useRef, useEffect } from "react";

interface ImageAttributes {
  alternativeText?: string;
  url: string;
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
  const isModalRef = useRef<HTMLDialogElement>(null);
  const [lastFocusedElement, setLastFocusedElement] = useState<Element | null>(
    null
  );

  useEffect(() => {
    if (isModalOpen) {
      isModalRef.current?.focus();
    } else {
      if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
      }
    }
  }, [isModalOpen]);

  const openModal = (image: GalleryItem) => {
    setLastFocusedElement(document.activeElement);

    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`flex flex-wrap justify-center ${
          isModalOpen ? "filter blur-sm" : ""
        }`}
      >
        {props.data.map((portfolioItem) =>
          portfolioItem.attributes.galleryitem.map((galleryItem, index) => {
            const imageUrl = galleryItem.image.data.attributes.url;
            const imageAlt =
              galleryItem.image.data.attributes.alternativeText ||
              "Gallery image";
            const effects = ["fade-up", "fade-down", "fade-right", "fade-left"];

            return (
              <article
                key={galleryItem.id}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:ring focus:ring focus:ring-light-accent dark:hover:ring-white hover:ring-dark-focus`}
                onClick={() => openModal(galleryItem)}
                onKeyDown={(e) => e.key === "Enter" && openModal(galleryItem)}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${imageAlt}`}
                data-aos={effects[index % effects.length]}
              >
                <img
                  className="h-auto md:max-h-auto max-w-full w-full rounded-lg shadow-lg"
                  src={imageUrl}
                  alt={imageAlt}
                />
              </article>
            );
          })
        )}
      </div>

      {isModalOpen && selectedImage && (
        <dialog
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
          open
          aria-modal="true"
          aria-labelledby="modal-title"
          role="dialog"
          ref={isModalRef}
          tabIndex={-1}
        >
          <div
            className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text backdrop-blur"
            role="document"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start ">
              <div className="md:w-1/2">
                <img
                  className="h-auto w-3/4 max-w-full rounded-lg m-auto"
                  src={selectedImage.image.data.attributes.url}
                  alt={
                    selectedImage.image.data.attributes.alternativeText ||
                    "Selected gallery image"
                  }
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 text-center self-center">
                <h3 id="modal-title" className="text-lg leading-6 font-medium">
                  {selectedImage.title}
                </h3>
                <p className="text-sm">{selectedImage.description}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring focus:ring-light-accent"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
