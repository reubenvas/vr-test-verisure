import React from 'react';
import renderer from 'react-test-renderer';
import LightButton from './LightButton';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<LightButton label='Test'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
