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
  const heroMovie =
    movies[
      Math.floor(Math.random() * movies.length)
    ];
  const truncateString = (string, maxLength) =>
    string?.length > maxLength
      ? string.slice(0, maxLength) + "..."
      : string;

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}`}
          alt={heroMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            {heroMovie?.title}
          </h2>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border  border-gray-300 text-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Relased: {heroMovie?.relase_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(
              heroMovie?.overview,
              200
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
