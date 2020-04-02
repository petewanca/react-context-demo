import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { MovieContext } from '../contexts/MovieContext';

export const AddMovieForm = () => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch({ type: 'ADD_MOVIE', payload: { title: input } });
        setInput('');
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder='Enter movie name'
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input type='submit' value='Add Movie' />
            </form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    text-align: center;
    padding: 20px;
    margin: 20px auto;
    width: 20%;
    max-width: 400px;
    background-color: #586ba4;
    border-radius: 7px;
`;
