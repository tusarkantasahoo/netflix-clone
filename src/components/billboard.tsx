"use client";
import React from "react";
import movies from "../rawdata/movies.json";
const Billboard = () => {
  console.log("movies", movies,Math.floor(Math.random()*10));
  var selectedMovie = Math.floor(Math.random()*10)
  if(selectedMovie>4){
    selectedMovie =0
  }
  return (
    <div className="relative h-[43vw]">
      <video
        className="w-full h-[43vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={movies[selectedMovie].thumbnailUrl}
        src={movies[selectedMovie].videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {movies[selectedMovie].title}
            </p>
            <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[50%] lg:[50%] drop-shadow-xl">
            {movies[selectedMovie].description}
            </p>
            <div className="flex flex-row items-center mt-3 gap-3">
                <button className="
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    py-1 md:py-2
                    px-1 md:px-4
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20transition

                ">
                    More Info
                </button>
            </div>
      </div>
    </div>
  );
};

export default Billboard;
