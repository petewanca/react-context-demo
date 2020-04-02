import React, { useContext } from 'react';
import styled from 'styled-components';
import { MovieContext } from '../contexts/MovieContext';

export const MovieDetail = ({ movie }) => {
    const { dispatch } = useContext(MovieContext);

    return (
        <MovieDesc onClick={() => dispatch({ type: 'REMOVE_MOVIE', id: movie.id })}>
            {movie.title}
        </MovieDesc>
    );
};

const MovieDesc = styled.div`
    background-color: #f68e5f;
    font-weight: bold;
    padding: 20px 0;
    margin: 15px;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        text-decoration: line-through;
        opacity: 0.4;
    }
    &:active {
        background-color: red;
    }
`;
