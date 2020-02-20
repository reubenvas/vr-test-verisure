import React from 'react';
import renderer from 'react-test-renderer';
import ScenarioCard from './ScenarioCard';

describe('ScenarioCard component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<ScenarioCard id={1} label='Test scenario card' url='https://test.com' refUrl='https://test.com' hideSelector='.test1' clickSelector='.test2' />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
