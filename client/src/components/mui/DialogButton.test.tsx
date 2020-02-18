import React from 'react';
import renderer from 'react-test-renderer';
import DialogButton from './DialogButton';

const MockDialog = (): React.ReactElement => (
    <div>MOCK DIALOG</div>
);

describe('DarkButton component', () => {
    test('snapshot renders', () => {
        const component = renderer.create(
            <DialogButton dialog={MockDialog}>
                Test Dialog
            </DialogButton>,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
