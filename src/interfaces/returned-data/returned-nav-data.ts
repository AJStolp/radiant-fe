export interface ReturnedNavDataProps {
  id: number;
  attributes: {
    cta: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    navitem: {
      id: number;
      title: string;
    }[];
    logo: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
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
          provider_metadata: any | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}
