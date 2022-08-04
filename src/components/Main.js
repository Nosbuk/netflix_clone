import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { requests } from "../requests";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const randomMovie =
    movies[
      Math.floor(Math.random() * movies.length)
    ];

  useEffect(() => {
    axios
      .get(requests.popular)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  console.log(randomMovie);

  return <div>Main</div>;
};
