import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ScenarioInputForm from './ScenarioInputForm';

const FormDialog = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const [label, setLabel] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [refUrl, setRefUrl] = useState<string>('');

    const [labelError, setLabelError] = useState<boolean>(false);
    const [urlError, setUrlError] = useState<boolean>(false);
    const [refUrlError, setRefUrlError] = useState<boolean>(false);

    const [submit, setSubmit] = useState<boolean>(false);

    const openDialog = (): void => {
        setDialogOpen(true);
    };

    const closeDialog = (): void => {
        setDialogOpen(false);
        setLabel('');
        setUrl('');
        setRefUrl('');
        setLabelError(false);
        setUrlError(false);
        setRefUrlError(false);
    };


    const setInputValue = (
        setInput: React.Dispatch<React.SetStateAction<string>>,
        error: boolean,
        setError: React.Dispatch<React.SetStateAction<boolean>>,
    ) => (e: any): void => {
        setInput(e.target.value);
        if (error) {
            setError(false);
        }
    };

    const checkForError = (
        value: string,
        regex: RegExp,
        setError: React.Dispatch<React.SetStateAction<boolean>>,
    ): boolean => {
        if (!regex.test(value)) {
            setError(true);
            return true;
        }
        return false;
    };

    const submitForm = (e: React.FormEvent): void => {
        e.preventDefault();

        setSubmit(true);

        // check for errrors
        checkForError(label, /.+/, setLabelError);
        checkForError(url, /^https?:\/\/(www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, setUrlError);
        checkForError(refUrl, /^https?:\/\/(www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, setRefUrlError);


        // if (labelError || urlError || refUrlError) {
        //     console.log('there is an aerror!!');
        //     return;
        // }
        // console.log({ labelError, urlError, refUrlError });

        // console.log('submiting form');
        // closeDialog();

        // // send further input information
    };

    const handleSubmit = () => {
        // check for errrors


        if (labelError || urlError || refUrlError) {
            console.log('there is an aerror!!');
            return;
        }
        console.log({ labelError, urlError, refUrlError });

        console.log('submiting form');
        closeDialog();

        // send further input information
    };

    useEffect(() => {
        if (submit) {
            handleSubmit();
        }
    }, [submit]);

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={openDialog}>
                Open form dialog
            </Button>
            <Dialog open={dialogOpen} onClose={closeDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New scenario</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To generate a report, please add at least one sceanario.
                        Add more details by clicking on &quot;More info&quot; later.
                    </DialogContentText>
                    <form onSubmit={submitForm}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="label"
                            label="Label"
                            type="text"
                            fullWidth
                            helperText={labelError ? 'Name to call this scenario' : null}
                            value={label}
                            onChange={setInputValue(setLabel, labelError, setLabelError)}
                            error={labelError}
                        />
                        <TextField
                            margin="dense"
                            id="url"
                            label="Url"
                            type="url"
                            fullWidth
                            helperText={urlError ? 'Full website URL (e.g. https://www.example.com/)' : null}
                            value={url}
                            onChange={setInputValue(setUrl, urlError, setUrlError)}
                            error={urlError}
                        />
                        <TextField
                            margin="dense"
                            id="reference-url"
                            label="Reference url"
                            type="url"
                            fullWidth
                            helperText={refUrlError ? 'Full website URL (e.g. https://www.example.com/)' : null}
                            value={refUrl}
                            onChange={setInputValue(setRefUrl, refUrlError, setRefUrlError)}
                            error={refUrlError}
                        />
                        <button hidden type='submit'></button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitForm} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;
