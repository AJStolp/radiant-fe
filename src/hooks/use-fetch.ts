import { useEffect, useState } from "react";
import axios from "axios";
import { FetchProps } from "../interfaces/fetch";
import { ReturnedNavDataProps } from "../interfaces/returned-data/returned-nav-data";
import { ReturnedHeroDataProps } from "../interfaces/returned-data/returned-hero-data";
// import { ReturnedJumboDataProps } from "../interfaces/returned-data/returned-jumbo-data";
import { ReturnedAboutDataProps } from "@interfaces/returned-data/returned-about-data";
import { ReturnedAccordionDataProps } from "@interfaces/returned-data/returned-accordion-data";

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
  const [fetchedHeroData, setFetchedHeroData] = useState<
    ReturnedHeroDataProps[]
  >([]);
  // const [fetchedJumboData, setFetchedJumboData] = useState<
  //   ReturnedJumboDataProps[]
  // >([]);

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
        setFetchedHeroData(data.data);
        // setFetchedJumboData(data.data);
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
    fetchedHeroData,
    // fetchedJumboData,
    fetchedAboutData,
    fetchedAccordionData,
    error,
  };
}
