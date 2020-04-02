import React, { useContext } from 'react';
import styled from 'styled-components';
import { MovieContext } from '../contexts/MovieContext';
import { MovieDetail } from './MovieDetail';

export const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return movies.length ? (
        <MovieContainer>
            {movies.map((movie) => (
                <MovieDetail key={movie.id} movie={movie} />
            ))}
        </MovieContainer>
    ) : (
        <EmptyMovie>You're all caught up!</EmptyMovie>
    );
};

const EmptyMovie = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px;
    width: 40%;
    max-width: 700px;
    background-color: #f76c5e;
    margin: 45px auto 0;
    text-align: center;
    border-radius: 7px;
`;

const MovieContainer = styled.div`
    width: 40%;
    max-width: 700px;
    background-color: #f76c5e;
    margin: 45px auto 0;
    text-align: center;
    padding: 10px;
    border-radius: 7px;
`;
