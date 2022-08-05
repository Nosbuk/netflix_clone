import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

export const MovieMiniature = ({ movie }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="block w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 hover:bg-black/80">
        <p className="flex items-center justify-center h-full font-bold text-center white-space-normal text-xd md:text-small">
          {movie?.title}
        </p>
        {like ? (
          <FaHeart className="absolute text-gray-300 top-4 left-4" />
        ) : (
          <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
        )}
      </div>
    </div>
  );
};
