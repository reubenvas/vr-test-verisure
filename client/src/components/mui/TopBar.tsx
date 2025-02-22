import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DialogButton from './DialogButton';
import FormDialog from './FormDialog';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    popoutButton: {
        position: 'absolute',
        width: '100vw',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 25,
    },
}));

const DenseAppBar = (): React.ReactElement<{}> => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense" >
                    <Grid container>
                        <Grid item>
                            <Typography variant="h4" color="inherit" component='h1'>
                                Visual regression testing
                            </Typography>
                        </Grid>
                        <Grid item justify='center' container alignItems='center' className={classes.popoutButton}>
                            <DialogButton dialog={FormDialog}>Add scenario</DialogButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default DenseAppBar;
