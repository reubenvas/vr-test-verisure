import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

type propTypes = {
    dialog: (props: { open: boolean }) => React.ReactElement;
    children: string;
};


/**
 * @param dialog is a React Dialog Element
 * @param children contains the value of the button
 * @returns a React Button which upon click will display the passed in react dialog element argument
 */
const DialogButton = ({ dialog, children }: propTypes): React.ReactElement => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const openDialog = (): void => {
        setDialogOpen(true);
    };

    useEffect(() => {
        if (dialogOpen) {
            setDialogOpen(false);
        }
    }, [dialogOpen]);

    const Dialog = dialog;

    return (
        <>
            <Button variant="contained" color="secondary" onClick={openDialog}>
                {children}
            </Button>
            <Dialog open={dialogOpen} />
        </>
    );
};

export default DialogButton;
