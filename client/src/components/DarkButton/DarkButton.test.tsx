import React from 'react';
import renderer from 'react-test-renderer';
import DarkButton from './DarkButton';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<DarkButton label='Test'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
