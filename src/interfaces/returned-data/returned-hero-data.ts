export interface ReturnedHeroDataProps {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    hero: {
      id: number;
      headline: string;
      subheadline: string;
      CTA: string;
    };
  };
}
