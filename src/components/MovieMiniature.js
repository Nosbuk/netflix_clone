import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";

export const MovieMiniature = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(
    db,
    "users",
    `${user?.email}`
  );

  const saveMovie = async () => {
    if (user?.email) {
      setLike((prev) => !prev);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Login to save movie");
    }
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="block w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 hover:bg-black/80">
        <div
          className="flex
        whitespace-normal items-center justify-center w-full h-full text-xs font-bold text-center md:text-small max-w-[90%] mx-auto"
        >
          {movie?.title}
        </div>
        <button onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute text-gray-300 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
          )}
        </button>
      </div>
    </div>
  );
};
