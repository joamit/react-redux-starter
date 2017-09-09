import AuthorApi from '../api/mockAuthorApi';
import {LOAD_AUTHORS_SUCCESS} from './action.types';

export function loadAuthorsSuccess(authors) {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            console.error(error);
            throw(error);
        });
    };
}