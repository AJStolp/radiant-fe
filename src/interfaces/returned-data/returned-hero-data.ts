export interface ReturnedHeroDataProps {
  //   data: Array<{
  //     id: number;
  //     attributes: {
  //       title?: string;
  //     };
  //   }>;
  id: number;
  attributes: {
    headline: string;
    CTA: string;
    subheadline: string;
  };
}
