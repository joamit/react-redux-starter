import expect from 'expect';
import * as courseActions from './course.actions';
import * as types from './action.types';

describe('Course Actions Test', () => {
    describe('CreateCourseSuccess Test', () => {

        it('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            const action = courseActions.createCourseSuccess(course);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('UpdateCourseSuccess Test', () => {
        it('should create a UPDATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean code'};
            const expectedAction = {
                type: types.UPDATE_COURSE_SUCCESS,
                course: course
            };

            const action = courseActions.updateCourseSuccess(course);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('LoadCourseSuccess Test', () => {
        it('should create a LOAD_COURSE_SUCCESS action', () => {
            const courses = [{id: 'clean-code', title: 'Clean code'}];
            const expectedAction = {
                type: types.LOAD_COURSES_SUCCESS,
                courses: courses
            };

            const action = courseActions.loadCoursesSuccess(courses);
            expect(action).toEqual(expectedAction);
        });
    });
});