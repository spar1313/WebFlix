import axios from 'axios'
import React, { useState, useEffect } from 'react'
import requests from '../Requests'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    }, []);

    const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }
    };

  return (
    <div className="w-full h-[550px] text-textMain">
      <div className="w-full h-full relative">
        {/* Gradient overlay */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-background/80 via-background/60 to-background/20"></div>
        
        {/* Movie Image */}
        <img
          className="w-full h-full object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        {/* Movie Details */}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary drop-shadow-lg">{movie?.title}</h1>

          <div className="my-4">
            <button className="bg-primary hover:bg-accent text-white py-2 px-5 rounded-lg mr-4 transition-all duration-300">
              Play
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-5 rounded-lg transition-all duration-300">
              Watch Later
            </button>
          </div>

          <p className="text-mutedText text-sm">Released: {movie?.release_date}</p>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white mt-2">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;


