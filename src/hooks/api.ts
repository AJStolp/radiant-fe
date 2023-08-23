import { useEffect, useState } from "react";
import axios from "axios";
import { FetchProps } from "../interfaces/fetch";
import { ReturnedNavDataProps } from "../interfaces/returned-data/returned-nav-data";
import { ReturnedComponentProps } from "../interfaces/returned-data/returned-components";
import { ReturnedHeroDataProps } from "../interfaces/returned-data/returned-hero-data";
import { ReturnedJumboDataProps } from "../interfaces/returned-data/returned-jumbo-data";

export default function getNavigation(props: FetchProps) {
  const [error, setError] = useState(null);
  const [fetchedNavData, setFetchedNavData] = useState<ReturnedNavDataProps[]>(
    []
  );
  const [fetchedHeroData, setFetchedHeroData] = useState<
    ReturnedHeroDataProps[]
  >([]);
  const [fetchedJumboData, setFetchedJumboData] = useState<
    ReturnedJumboDataProps[]
  >([]);
  const [fetchedComponent, setFetchedComponent] = useState<
    ReturnedComponentProps[]
  >([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then(({ data }) => {
        setFetchedNavData(data.data);
        setFetchedComponent(data.data);
        setFetchedHeroData(data.data);
        setFetchedJumboData(data.data);
      })
      .catch((error) => setError(error));
  }, [props.url]);

  if (error) {
    return { error };
  }

  return {
    fetchedNavData,
    fetchedComponent,
    fetchedHeroData,
    fetchedJumboData,
    error,
  };
}
