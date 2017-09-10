import expect from 'expect';
import {authorsFormatterForDropdown} from './selectors';

describe('Selectors Tests ', () => {

    describe('authorsFormatterForDropdown ', () => {

        it('should return author data formatted for use in a dropdown', () => {

            const authors = [
                {id: 'amit-joshi', firstName: 'Amit', lastName: 'Joshi'}
            ];

            const expected = [
                {value: 'amit-joshi', text: 'Amit Joshi'}
            ];

            expect(authorsFormatterForDropdown(authors)).toEqual(expected);
        });
    });
});