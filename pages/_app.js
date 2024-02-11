import React from 'react';
import { MovieProvider } from '../context'; // Import the MovieProvider
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // Wrap your entire application with the MovieProvider
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;