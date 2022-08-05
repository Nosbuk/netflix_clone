import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { MovieMiniature } from "./MovieMiniature";

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">
        {title}
      </h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((movie, index) => (
            <MovieMiniature
              key={index}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
};
