import {CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS, LOAD_COURSES_SUCCESS} from './action.types';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from './ajax.status.actions';

export function createCourseSuccess(course) {
    return {
        type: CREATE_COURSE_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course) {
    return {
        type: UPDATE_COURSE_SUCCESS,
        course
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}