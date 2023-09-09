export interface ReturnedAccordionDataProps {
  id: number;
  attributes: {
    accordion: [{ id: number; title: string; content: string }];
    mainContent: { id: number; heading: string; content: string };
  };
}
