import expect from 'expect';
import courseReducer from './course.reducer';
import * as actions from '../actions/course.actions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};
        //create a new action
        const action = actions.createCourseSuccess(newCourse);
        //make reducer call
        const newState = courseReducer(initialState, action);

        //assert the result
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const newCourse = {id: 'B', title: 'New title'};
        //create a new action
        const action = actions.updateCourseSuccess(newCourse);

        //make reducer call
        const newState = courseReducer(initialState, action);
        const updatedCourses = newState.find(a => a.id === newCourse.id);
        const untouchedCourses = newState.filter(a => a.id !== newCourse.id);

        //assert the result
        expect(updatedCourses.title).toEqual('New title');
        expect(untouchedCourses.length).toEqual(2);
        expect(untouchedCourses[0].title).toEqual('A');
        expect(untouchedCourses[1].title).toEqual('C');
    });
});