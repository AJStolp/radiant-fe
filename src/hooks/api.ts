import { useEffect, useState } from "react";
import axios from "axios";
import { FetchProps } from "../interfaces/fetch";
import { ReturnedNavDataProps } from "../interfaces/returned-data/returned-nav-data";
import { ReturnedComponentProps } from "../interfaces/returned-data/returned-components";

export default function getNavigation(props: FetchProps) {
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState<ReturnedNavDataProps[]>([]);
  const [fetchedComponent, setFetchedComponent] = useState<
    ReturnedComponentProps[]
  >([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then(({ data }) => {
        setFetchedData(data.data);
        setFetchedComponent(data.data);
      })
      .catch((error) => setError(error));
  }, [props.url]);

  if (error) {
    return { error };
  }

  return { fetchedData, fetchedComponent, error };
}
