import {CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS, LOAD_COURSES_SUCCESS} from '../actions/action.types';
import initialState from './initial.state';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case CREATE_COURSE_SUCCESS:
            //Add the new course to existing state
            return [...state, Object.assign({}, action.course)];
        case UPDATE_COURSE_SUCCESS:
            //find and refresh the course being updated
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)];
        case LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            //Return existing state since we couldn't find any matching action
            return state;
    }
}