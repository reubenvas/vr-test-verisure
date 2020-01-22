import React from 'react';
import renderer from 'react-test-renderer';
import UserTableRow from './UserTableRow';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<UserTableRow id='1' firstName='Olle' lastName='Svensson' email='ollesvensson@gmail.com'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
