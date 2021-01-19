import React, { createContext, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Hari Potter",
      price: "$10",
      id: 2314,
    },
    {
      name: "Superman",
      price: "$15",
      id: 4514,
    },
    {
      name: "Avengers",
      price: "$12",
      id: 23655,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
