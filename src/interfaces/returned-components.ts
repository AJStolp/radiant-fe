export interface ReturnedComponentProps {
  data: Array<{
    uid: string;
    category: string;
    apiId: string;
    schema: {
      displayName: string;
      description: string;
      icon: string;
      collectionName: string;
      attributes: {
        [key: string]: {
          type: string;
        };
      };
    };
  }>;
}
