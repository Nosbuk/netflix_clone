import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { requests } from "../requests";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.popular)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  console.log(movies);

  return <div>Main</div>;
};
