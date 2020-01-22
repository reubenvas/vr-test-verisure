import React from 'react';
import renderer from 'react-test-renderer';
import UsersTable from './UsersTable';

describe('DarkButton component', () => {
    test('snapshot renders', async () => { // doesn't snapshot after the component has fetched data
        const component = renderer.create(<UsersTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
