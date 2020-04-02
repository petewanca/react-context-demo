import React, { createContext, useReducer, useEffect } from 'react';
import { MovieReducer } from '../reducers/MovieReducer';

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
    const [movies, dispatch] = useReducer(MovieReducer, [], () => {
        const data = localStorage.getItem('movies');
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    return <MovieContext.Provider value={{ movies, dispatch }}>{children}</MovieContext.Provider>;
};
