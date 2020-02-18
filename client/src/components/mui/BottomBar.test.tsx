import React from 'react';
import renderer from 'react-test-renderer';
import BottomBar from './BottomBar';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<BottomBar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
