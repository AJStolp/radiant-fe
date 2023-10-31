import { useEffect, useState } from "react";
import axios from "axios";
import { FetchProps } from "../interfaces/fetch";
import { ReturnedNavDataProps } from "../interfaces/returned-data/returned-nav-data";
import { ReturnedHomeDataProps } from "../interfaces/returned-data/returned-home-data";
import { ReturnedAboutDataProps } from "../interfaces/returned-data/returned-about-data";
import { ReturnedAccordionDataProps } from "../interfaces/returned-data/returned-accordion-data";

const client = axios.create({
  baseURL: import.meta.env.VITE_BE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default function getNavigation(props: FetchProps) {
  const [error, setError] = useState(null);
  const [fetchedNavData, setFetchedNavData] = useState<ReturnedNavDataProps[]>(
    []
  );
  const [fetchedHomeData, setFetchedHomeData] = useState<
    ReturnedHomeDataProps[]
  >([]);

  const [fetchedAboutData, setFetchedAboutData] = useState<
    ReturnedAboutDataProps[]
  >([]);

  const [fetchedAccordionData, setFetchedAccordionData] = useState<
    ReturnedAccordionDataProps[]
  >([]);

  useEffect(() => {
    client
      .get(props.url)
      .then(({ data }) => {
        setFetchedNavData(data.data);
        setFetchedHomeData(data.data);
        setFetchedAboutData(data.data);
        setFetchedAccordionData(data.data);
      })
      .catch((error) => setError(error));
  }, [props.url]);

  if (error) {
    return { error };
  }

  return {
    fetchedNavData,
    fetchedHomeData,
    fetchedAboutData,
    fetchedAccordionData,
    error,
  };
}
