import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<TopBar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
