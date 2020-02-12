import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Grid, createStyles, List, ListItem, ListItemText, Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minWidth: 800,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    dividerFullWidth: {
        marginRight: 10,
    },
    listRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    noTopPadding: {
        paddingTop: 0,
    },
    noBottomPadding: {
        paddingBottom: 0,
    },
    textInMiddle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

type propTypes = {
    label: string;
    refUrl: string;
    url: string;
};

const ScenarioCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.noBottomPadding}>
                <Grid container >
                    <Grid className={classes.textInMiddle} item xs={6}>
                        <Typography variant="h6" component="h2">
                            Verisure homepage
                        </Typography>
                        <Typography
                            className={classes.dividerFullWidth}
                            color="textSecondary"
                            display="block"
                            variant="caption"
                        >
                            Scenario label
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <List className={classes.listRoot}>
                            <ListItem className={`${classes.noTopPadding} ${classes.noBottomPadding}`}>
                                <ListItemText primary="Photos" secondary="Url" />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem className={`${classes.noTopPadding} ${classes.noBottomPadding}`}>
                                <ListItemText primary="Work" secondary="Reference url" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default ScenarioCard;
