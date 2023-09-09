export interface ReturnedAboutDataProps {
  id: number;
  attributes: {
    teaminfo: [{ id: number; name: string; about: string }];
  };
}
