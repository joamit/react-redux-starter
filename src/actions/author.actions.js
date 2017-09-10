import AuthorApi from '../api/mockAuthorApi';
import {LOAD_AUTHORS_SUCCESS} from './action.types';
import {ajaxCallError, beginAjaxCall} from './ajax.status.actions';

export function loadAuthorsSuccess(authors) {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}