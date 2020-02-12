import React, { useState } from 'react';

const ScenarioInputForm = () => {
    const [name, setName] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [refUrl, setRefUrl] = useState<string>('');

    const changeInput = (
        changeFunc: React.Dispatch<React.SetStateAction<string>>,
    ): (e: any
        ) => void => (e: any): void => {
        changeFunc(e.target.value);
        console.log('change input', e.target.value);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // add validation of inputs
        // clear input fields

        // add the scenario to the list of scenarios
    };

    return (
        <form onSubmit={submit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' value={name} onChange={changeInput(setName)} />
            </div>
            <div>
                <label htmlFor="url">Url:</label>
                <input type="text" id='url' value={url} onChange={changeInput(setUrl)} />
            </div>
            <div>
                <label htmlFor='reference-url'>Reference Url:</label>
                <input type="text" id='reference-url' value={refUrl} onChange={changeInput(setRefUrl)} />
            </div>
            <input type="submit" value="Add" className='button is-primary is-large'/>
        </form>
    );
};

export default ScenarioInputForm;
