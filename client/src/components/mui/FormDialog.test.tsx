import React from 'react';
import renderer from 'react-test-renderer';
import FormDialog from './FormDialog';

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const closedDialogComponent = renderer.create(<FormDialog open={false} />);
        const openedDialogComponent = renderer.create(<FormDialog open={true} />);
        const tree1 = closedDialogComponent.toJSON();
        const tree2 = openedDialogComponent.toJSON();
        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
    });
});
