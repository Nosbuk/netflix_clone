import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (direction === "left")
      sliderRef.current.scrollLeft -= 500;

    if (direction === "right")
      sliderRef.current.scrollLeft += 500;
  };

  useEffect(() => {
    onSnapshot(
      doc(db, "users", `${user?.email}`),
      (doc) => {
        setMovies(doc.data()?.savedShows);
      }
    );
  }, [user?.email]);

  const movieRef = doc(
    db,
    "users",
    `${user?.email}`
  );
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter(
        (movie) => movie.id !== passedID
      );
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">
        My shows:
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
            return (
              <div
                key={index}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="block w-full h-auto"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 hover:bg-black/80">
                  <div
                    className="flex
        whitespace-normal items-center justify-center w-full h-full text-xs font-bold text-center md:text-small max-w-[90%] mx-auto"
                  >
                    {movie?.title}
                  </div>
                  <button
                    onClick={() =>
                      deleteShow(movie.id)
                    }
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            );
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
