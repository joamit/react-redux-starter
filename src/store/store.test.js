import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initial.state';
import * as courseActions from '../actions/course.actions';


describe('Store', () => {

    it('should handle creating courses', () => {

        //arrange setup
        const store = createStore(rootReducer, initialState);
        const course = {title: 'Clean Code'};

        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assertions
        const actual = store.getState().courses[0];
        const expected = {
            title: 'Clean Code'
        };

        expect(actual).toEqual(expected);
    });

    it('should handler creating and updating a course', () => {

        const store = createStore(rootReducer, initialState);
        let course = {title: 'Clean Code'};

        //create and dispatch an action
        let action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assertions
        let actual = store.getState().courses[0];
        let expected = {
            title: 'Clean Code'
        };

        expect(actual).toEqual(expected);

        course = {title: 'Clean code updated'};
        action = courseActions.updateCourseSuccess(course);

        //perform an update action
        store.dispatch(action);
        expect(store.getState().courses.length).toEqual(1);
        actual = store.getState().courses[0];
        expected = {
            title: 'Clean code updated'
        };

        expect(actual).toEqual(expected);
    });
});