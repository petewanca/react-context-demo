import React from 'react';
import { MovieContextProvider } from './contexts/MovieContext';
import { Navbar } from './components/Navbar/Navbar';
import { MovieList } from './components/MovieList';
import { AddMovieForm } from './components/AddMovieForm';

const App = () => {
    return (
        <MovieContextProvider>
            <Navbar />
            <MovieList />
            <AddMovieForm />
        </MovieContextProvider>
    );
};

export default App;
