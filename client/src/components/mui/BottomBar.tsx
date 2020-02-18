import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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

const sendScenaroisToServerAndRedirect = (): void => {
    console.log('generating report');
    const scenarios = JSON.stringify(scenarioStore.scenarios);
    postScenarios(scenarios);
    // scenarioStore.scenarios
};

const BottomBar = (): React.ReactElement<{}> => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Grid container justify='center' className={classes.popoutButton}>
                    <Button variant="contained" color="secondary" onClick={sendScenaroisToServerAndRedirect}>Generate report</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default BottomBar;
