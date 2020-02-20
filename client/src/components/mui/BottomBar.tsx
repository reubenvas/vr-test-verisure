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


    const sendScenaroisToServerAndRedirect = async (): Promise<void> => {
        const scenarios = JSON.stringify(scenarioStore.scenarios);
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
                    <Button variant="contained" color="secondary" disabled={buttonDisabled} onClick={sendScenaroisToServerAndRedirect}>Generate report</Button>
                </Grid>
            </Toolbar>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={snackbarOpen} message='Generating report... This might take a few minutes' />
        </AppBar>
    );
};

export default BottomBar;
