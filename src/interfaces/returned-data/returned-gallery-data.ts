export interface ReturnedGalleryDataProps {
  id: number;
  attributes: {
    galleryitem: [
      {
        id: number;
        title?: string;
        description?: string;
        image: {
          data: {
            id: number;
            attributes: { alternativeText: string; url: string };
          };
        };
      }
    ];
  };
}
