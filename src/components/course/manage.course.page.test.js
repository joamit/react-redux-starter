import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './manage.course.page';

describe('Manage Course Page Test ', () => {

    it('sets error message when trying to save empty title', () => {
        const props = {
            course: {
                title: '',
                watchHref: '',
                authorId: '',
                category: '',
                length: '',
                id: ''
            },
            actions: {saveCourse: ()=> {return Promise.resolve();}},
            authors: []
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});