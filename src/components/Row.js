import axios from "axios";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { MovieMiniature } from "./MovieMiniature";
import {
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slide = (direction) => {
    if (direction === "left")
      sliderRef.current.scrollLeft -= 500;

    if (direction === "right")
      sliderRef.current.scrollLeft += 500;
  };
  console.log(title, movies);
  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => {
            slide("left");
          }}
          className="absolute z-10 hidden m-2 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 sm:group-hover:block"
          size={40}
        />
        <div
          ref={sliderRef}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((movie, index) => {
            if (
              movie.backdrop_path &&
              movie.title &&
              movie.title != "Futabu Live Action"
            ) {
              return (
                <MovieMiniature
                  key={index}
                  movie={movie}
                />
              );
            }
          })}
        </div>
        <MdChevronRight
          onClick={() => {
            slide("right");
          }}
          className="absolute right-0 z-10 hidden m-2 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 sm:group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};
