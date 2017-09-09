import {LOAD_AUTHORS_SUCCESS} from '../actions/action.types';
import initialState from './initial.state';

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            //Return existing state since we couldn't find any matching action
            return state;
    }
}