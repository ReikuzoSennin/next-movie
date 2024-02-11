import Header from '../components/header';
import Footer from '../components/footer';
import Ring from '../components/ring';
import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../context'; // Import the MovieContext
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Theatre() {
    const [selectedDate, setSelectedDate] = useState(new Date('2020-04-04')); // Set default date to '2020-04-04'
    const { specificMovies, fetchSpecificMovies } = useContext(MovieContext);
    const [theatreName, setTheatreName] = useState('ABC movies'); // Set default theatre name
  
    const handleSubmit = (e) => {
        const dateOnlyString = selectedDate.toISOString().split('T')[0];
        e.preventDefault();
        const encodedTheatreName = encodeURIComponent(theatreName); // URL encode the theater name
        console.log('Form submitted');
        console.log('Theatre Name:', theatreName);
        console.log('Date:', dateOnlyString);
        fetchSpecificMovies(encodedTheatreName, dateOnlyString);
    };    
  
    useEffect(() => {
        const encodedTheatreName = encodeURIComponent(theatreName); // URL encode the theater name
        const dateOnlyString = selectedDate.toISOString().split('T')[0];
        fetchSpecificMovies(encodedTheatreName, dateOnlyString);
    }, []); // Empty dependency array ensures it runs only once after the initial render
  
    return (
        <div>
            <title>Search By Theatre</title>
            <Header />
            <section className="flex justify-center items-center bg-gradient-to-r from-customGray-100 to-black min-h-[83vh] space-x-28">
                <Ring />
                <div className='w-4/12'>
                    <h1 className="text-[2.9em] font-bold text-white leading-16 pb-1 tracking-wider">Search your movies here!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='w-[36rem] grid grid-cols-3 gap-3'>
                            <div className='relative col-span-2'>
                                <img className="absolute my-3 mx-5" width="30" height="30" src="https://img.icons8.com/sf-regular/48/search.png" alt="search" />
                                <input className="w-full p-3 rounded-full pl-14 text-xl text-[#8c8c8c]" type="text" placeholder='Search by theatre....' value={theatreName} onChange={(e) => setTheatreName(e.target.value)} ></input>
                            </div>
                            <div className="relative max-w-sm">
                                <img className="absolute z-10 m-4" width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/000000/external-calendar-date-time-thin-kawalan-studio-3.png" alt="external-calendar-date-time-thin-kawalan-studio-3" />
                                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} onSelect={(date) => setSelectedDate(new Date(date))} dateFormat="yyyy-MM-dd" className="rounded-full w-full pl-12 py-3.5 text-xl text-[#8c8c8c]"/>
                            </div>
                            <button type="submit" className='bg-red p-3 rounded-full font-bold text-xl'>Search</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-dark-gray min-h-[150vh]">
                <div className="py-40 px-80">
                    <div className="flex justify-between items-center mb-8 tracking-widest">
                        <h2 className="text-5xl font-medium text-white">Search Results</h2>
                        <p className="text-2xl text-yellow-500 font-semibold cursor-pointer hover:text-yellow-600 transition duration-200">View More</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 min-h-[120vh]">
                        {specificMovies && specificMovies.length > 0 ? (
                            specificMovies.map((specificMovie, index) => (
                                <div key={specificMovie.Movie_ID} className={`col-span-${index === 0 ? '2' : '1'} bg-gradient-to-b from-customGray-100 to-black overflow-scroll flex flex-col justify-between bg-cover bg-center`} style={{ backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.01), rgba(0, 0, 0, 0.7)), url(${specificMovie.Poster})` }}>
                                    <div className="flex items-center py-7 px-9">
                                        <span className="mr-2 py-1 text-sm font-light bg-red p-3 rounded-full brightness-100">{specificMovie.Genre}</span>
                                    </div>
                                    <div className="py-4 px-7">
                                        <div className="flex text-white text-sm pb-7 brightness-100">
                                            <div className="flex items-center mr-6">
                                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill='#9a9ab0'>
                                                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                                                </svg>
                                                <p>{specificMovie.Duration}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://img.icons8.com/material-outlined/24/9a9ab0/visible--v1.png" alt="viewers" className="w-6 h-6 mr-2" />
                                                <p>{specificMovie.Views} views</p>
                                            </div>
                                        </div>
                                        <h2 className="text-5xl font-semibold mb-2 text-white tracking-wider">{specificMovie.Title}</h2>
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
