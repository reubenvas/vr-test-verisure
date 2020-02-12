import React from 'react';
import renderer from 'react-test-renderer';
import UserTableRow from './UserTableRow';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<UserTableRow id='1' url='http://google.com' referenceUrl='http://google.com' label='scenario test'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
