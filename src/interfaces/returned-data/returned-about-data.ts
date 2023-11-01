interface Formats {
  small: {
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
}

interface Attributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

interface EmployeePhotoData {
  id: number;
  attributes: Attributes;
}

interface EmployeePhoto {
  data: EmployeePhotoData;
}

export interface ReturnedAboutDataProps {
  id: number;
  attributes: {
    teaminfo: Array<{
      id: number;
      name: string;
      about: string;
      employeephoto: EmployeePhoto;
    }>;
  };
}
