import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

type propTypes = {
    onChange?: (event: React.ChangeEvent) => void;
    helperText?: string;
    error?: boolean;
    label: string;
};

const ScenarioInputForm = () => {
    const [label, setLabel] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [refUrl, setRefUrl] = useState<string>('');

    const [labelError, setLabelError] = useState<boolean>(false);
    const [urlError, setUrlError] = useState<boolean>(false);
    const [refUrlError, setRefUrlError] = useState<boolean>(false);

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

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        // check for errrors
        checkForError(label, /.+/, setLabelError);
        checkForError(url, /^https?:\/\/(www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, setUrlError);
        checkForError(refUrl, /^https?:\/\/(www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, setRefUrlError);
        if (labelError || urlError || refUrlError) {
            return;
        }

        console.log('submiting form');

        // send further input information
    };

    return (
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
    );
};

export default ScenarioInputForm;
