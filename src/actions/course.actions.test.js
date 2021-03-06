import expect from 'expect';
import * as courseActions from './course.actions';
import * as types from './action.types';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions ', () => {
    describe('CreateCourseSuccess ', () => {

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

    describe('UpdateCourseSuccess ', () => {
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

    describe('LoadCourseSuccess ', () => {
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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        /*
        NOCK Example usage
            nock('http://example.com')
                .get('/courses')
                .reply(200, { body: {courses: [{id: 1, title: 'Test'}]}});
         */

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});