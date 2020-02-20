import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Scenario } from 'backstopjs';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import sccenarioStore from '../../store/scenarioStore';
import ListItemTextInput from './ListItemTextInput';


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

type propTypes = Scenario & {
    label: string;
    refUrl?: string;
    url: string;
    id: number;
};

const ScenarioCard = ({
    id, label, refUrl, url, ...restProps
}: propTypes): React.ReactElement => {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const classes = useStyles();

    const deleteScenario = (): void => {
        sccenarioStore.removeScenario(id);
    };

    const toggleExpandedView = (): void => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <ExpansionPanel expanded={expanded}>
                <ExpansionPanelSummary>
                    <CardContent className={classes.noBottomPadding}>
                        <Grid container >
                            <Grid className={classes.textInMiddle} item xs={6}>
                                <Typography variant="h6" component="h2">
                                    {label}
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
                                        <ListItemText primary={url} secondary="Url" />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem className={`${classes.noTopPadding} ${classes.noBottomPadding}`}>
                                        <ListItemText primary={refUrl} secondary="Reference url" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </CardContent>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List className={classes.listRoot}>
                        {Object.keys(restProps).map((key, i) => (
                            <div key={i}>
                                <ListItem className={`${classes.noTopPadding} ${classes.noBottomPadding}`} >
                                    <ListItemTextInput
                                        type={typeof restProps[key]}
                                        id={id} initialPrimary={restProps[key] === '' ? 'Not specified' : restProps[key]}
                                        secondary={key}
                                    />
                                </ListItem>
                                <Divider component="li" />
                            </div>
                        ))}
                    </List>

                </ExpansionPanelDetails>
            </ExpansionPanel>
            <CardActions>
                <Grid container justify="space-between" alignItems="baseline">
                    <Button size="medium" onClick={toggleExpandedView}>View {expanded ? 'less' : 'more'}</Button>
                    <Button size="small" onClick={deleteScenario}>Delete</Button>
                </Grid>
            </CardActions>
        </Card>
    );
};

export default ScenarioCard;
