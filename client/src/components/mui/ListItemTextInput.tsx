import React, { useEffect } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import scenarioStore from '../../store/scenarioStore';

type propTypes = {
    id: number;
    initialPrimary: string;
    secondary: string;
    type: string;
}

const ListItemTextInput = ({
    id, initialPrimary, secondary, type,
}: propTypes): React.ReactElement => {
    const [isTextField, setIsTextField] = React.useState<boolean>(true);
    const [primary, setPrimary] = React.useState<string | number>(initialPrimary);

    useEffect(() => {
        setPrimary(initialPrimary);
    }, [initialPrimary]);

    const toggleSpanToInput = (): void => {
        setIsTextField(!isTextField);
    };

    const changeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const newValue = e.currentTarget.value;
        if (!(Number(newValue) < 0)) {
            setPrimary(newValue);
        }
    };

    const clickEnterUpdateText = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            updateText();
        }
    };

    const setNewValue = (): void => {
        if (type === 'number') {
            scenarioStore.changeScenarioKeyVal(id, secondary, Number(primary));
            return;
        }
        const stringPrimary = primary === 'Not specified' ? '' : primary;
        scenarioStore.changeScenarioKeyVal(id, secondary, stringPrimary);
    };

    const updateText = (): void => {
        setNewValue();
        toggleSpanToInput();
    };

    return (
        <>
            {isTextField
                ? <ListItemText
                    onDoubleClick={toggleSpanToInput}
                    primary={type === 'number' ? Number(primary) : primary}
                    secondary={secondary}
                />
                : <TextField
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                    margin="dense"
                    id={secondary}
                    label={secondary}
                    type={type}
                    inputProps={{ min: 0 }}
                    value={primary === 'Not specified' ? '' : primary}
                    onChange={changeInput}
                    onBlur={updateText}
                    onKeyPress={clickEnterUpdateText}
                />
            }
        </>
    );
};

export default ListItemTextInput;
