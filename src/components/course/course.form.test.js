import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './course.form';

function setup(saving) {
    let props = {
        course: {},
        loading: saving,
        errors: {},
        onSave: () => {
        },
        onChange: () => {
        }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();
    return {
        props, output, renderer
    };
}

describe('CourseForm via React Test Utils', () => {

    it('renders the course form and an h1 tag', () => {
        const {output} = setup(false);
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const {output} = setup(false);
        //submit button is 7th child
        const submitButton = output.props.children[6];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const {output} = setup(true);
        const submitButton = output.props.children[6];
        expect(submitButton.props.value).toBe('Saving...');
    });
});