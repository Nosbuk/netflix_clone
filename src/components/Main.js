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
  const randomMovie =
    movies[
      Math.floor(Math.random() * movies.length)
    ];

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
      </div>
    </div>
  );
};
