export interface ReturnedHeroDataProps {
  id: number;
  attributes: {
    headline: string;
    CTA: string;
    subheadline: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    heroimage: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            large: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null; // You might need to adjust this based on your data
              size: number;
              width: number;
              height: number;
            };
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null; // You might need to adjust this based on your data
              size: number;
              width: number;
              height: number;
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null; // You might need to adjust this based on your data
              size: number;
              width: number;
              height: number;
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null; // You might need to adjust this based on your data
              size: number;
              width: number;
              height: number;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null; // You might need to adjust this based on your data
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}
