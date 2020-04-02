import { v1 as uuid } from 'uuid';

export const MovieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    title: action.payload.title,
                    id: uuid()
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
};
