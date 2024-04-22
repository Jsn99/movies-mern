import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Center = ({ selectedGenre, selectedSort, currentPage, searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies", {
          params: {
            search: searchTerm,
            genres: selectedGenre,
            sort: selectedSort,
            page: currentPage,
          },
          headers: {
            Authorization: "Bearer FSMovies2023",
          },
        });
        setMovies(response.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [selectedGenre, selectedSort, currentPage, searchTerm]);

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {movies.map((movie) => (
        <Link to={"/movie/" + movie._id} key={movie._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {movie.backdrop && (
              <img
                src={movie.backdrop}
                alt={movie.title}
                className="w-full h-auto rounded-t-2xl"
              />
            )}
          </div>
          <div className="mt-1">
            <span className="font-bold">Movie Name:</span>
            <span className=""> {movie.title}</span>
          </div>
          <div className="mt-1">
            <span className="font-bold">Duration:</span>
            <span className=""> {movie.length}</span>
          </div>
          <div className="mt-1">
            <span className="font-bold">IMDB Rating:</span>
            <span className=""> {movie.imdb_rating}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Center;
