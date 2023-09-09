export interface ReturnedNavDataProps {
  id: number;
  attributes: {
    cta: string;
    navitem: [{ id: number; title: string }];
  };
}
