import React, { useContext } from 'react';
import './style.css';
import { MovieContext } from '../../contexts/MovieContext';

export const Navbar = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div className='container'>
            <div className='containerHeader'>Pete's Watch List</div>
            <div className='containerDesc'>
                There are {movies.length} movie(s) in your watch list.
            </div>
        </div>
    );
};
