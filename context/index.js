import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [timeslots, setTimeslots] = useState([]);
  const [specificMovies, setSpecificMovies] = useState([]);

  const fetchNewMovies = async () => {
    try {
      const api = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01`;
      console.log(api);
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Failed to fetch new movies');
      }
      const data = await response.json(); 
      setMovies(data.data.slice(0, 5)); 
    } catch (error) {
      console.error('Error fetching new movies:', error);
    }
  };

  const fetchTimeslots = async (theatreName, timeStart, timeEnd) => {
    try {
      const api = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${theatreName}&time_start=${timeStart}&time_end=${timeEnd}`;
      console.log(api);
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Failed to fetch timeslots');
      }
      const data = await response.json(); 
      setTimeslots(data.data.slice(0, 5)); 
    } catch (error) {
      console.error('Error fetching timeslots:', error);
    }
  };

  const fetchSpecificMovies = async (theatreName, date) => {
    try {
      const api = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${theatreName}&d_date=${date}`;
      console.log(api);
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Failed to fetch specific movies');
      }
      const data = await response.json(); 
      setSpecificMovies(data.data.slice(0, 5)); 
    } catch (error) {
      console.error('Error fetching specific movies:', error);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, timeslots, specificMovies, fetchNewMovies, fetchSpecificMovies, fetchTimeslots }}>
      {children}
    </MovieContext.Provider>
  );
};
