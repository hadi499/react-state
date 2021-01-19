import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h3>Hadi Apps</h3>
      <p>List movies: {movies.length}</p>
    </nav>
  );
};
export default Nav;
