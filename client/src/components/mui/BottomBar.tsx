import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import scenarioStore from '../../store/scenarioStore';
import { postScenarios } from '../../api/scenarioApi';

const useStyles = makeStyles(() => createStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    popoutButton: {
        position: 'absolute',
        zIndex: 1,
        top: -15,
        left: 0,
        right: 0,
        margin: '0 0',
    },
}));


const BottomBar = (): React.ReactElement<{}> => {
    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState<string>('');

    let timeoutId: NodeJS.Timeout;

    const sendScenarosToServer = async (): Promise<void> => {
        if (scenarioStore.scenarios.length === 0) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setSnackbarMessage('Before generating a report you have to add at least one scenario.');
            setSnackbarOpen(true);
            timeoutId = setTimeout(() => {
                setSnackbarOpen(false);
            }, 1500);
            return;
        }
        const scenarios = JSON.stringify(scenarioStore.scenarios);
        setSnackbarMessage('Generating report... This might take a few minutes');
        setSnackbarOpen(true);
        setButtonDisabled(true);
        await postScenarios(scenarios);
        setSnackbarOpen(false);
        setButtonDisabled(false);
    };

    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Grid container justify='center' className={classes.popoutButton}>
                    <Button variant="contained" color="secondary" disabled={buttonDisabled} onClick={sendScenarosToServer}>Generate report</Button>
                </Grid>
            </Toolbar>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={snackbarOpen} message={snackbarMessage} />
        </AppBar>
    );
};

export default BottomBar;
