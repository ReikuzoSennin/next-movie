import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../context'; // Import the MovieContext
import Header from '../components/header';
import Footer from '../components/footer';
import Ring from '../components/ring';

export default function Home() {
  const { movies, fetchNewMovies } = useContext(MovieContext); // Access movies from the movie context

  useEffect(() => {
      fetchNewMovies();
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return (
    <div>
      <title>PcariMovie</title>
      <Header />
      <section className="flex justify-center items-center bg-gradient-to-r from-customGray-100 to-black min-h-[83vh] space-x-28">
        <Ring />
        <div className='w-4/12'>
          <h1 className="text-7xl pl-5 font-bold text-white leading-16 pb-6">Find your movies here!</h1>
          <div className='w-[32rem] pl-5'>
            <p className='text-white font-extralight tracking-wide leading-8'>Explore our gallery full of exciting films from all around the globe only for your entertainment. No hidden charges or disturbing ads.</p>
          </div>
        </div>
      </section>
      <section className="bg-dark-gray min-h-[150vh]">
        <div className="py-40 px-80">
          <div className="flex justify-between items-center mb-8 tracking-widest">
            <h2 className="text-5xl font-medium text-white">New Releases</h2>
            <p className="text-2xl text-yellow-500 font-semibold cursor-pointer hover:text-yellow-600 transition duration-200">View More</p>
          </div>
          <div className="grid grid-cols-3 gap-4 min-h-[120vh]">
            {movies && movies.length > 0 ? (
              movies.map((movie, index) => (
                <div key={movie.Movie_ID} className={`col-span-${index === 0 ? '2' : '1'} bg-gradient-to-b from-customGray-100 to-black overflow-scroll flex flex-col justify-between bg-cover bg-center`} style={{ backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.01), rgba(0, 0, 0, 0.7)), url(${movie.Poster})`}}>
                  <div className="flex items-center py-7 px-9">
                    <span className="mr-2 py-1 text-sm font-light bg-red p-3 rounded-full brightness-100">{movie.Genre}</span>
                  </div>
                  <div className="py-4 px-7">
                    <div className="flex text-white text-sm pb-7 brightness-100">
                      <div className="flex items-center mr-6">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill='#9a9ab0'>
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                        </svg>
                        <p>{movie.Duration}</p>
                      </div>
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/material-outlined/24/9a9ab0/visible--v1.png" alt="viewers" className="w-6 h-6 mr-2" />
                        <p>{movie.Views} views</p>
                      </div>
                    </div>
                    <h2 className="text-5xl font-semibold mb-2 text-white tracking-wider">{movie.Title}</h2>
                  </div>
                </div>
              ))
            ) : (
              <div>
                {/* Display a message or alternative content when movies don't exist */}
                No movies available.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
