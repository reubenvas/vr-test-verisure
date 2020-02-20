import React from 'react';
import { observer } from 'mobx-react-lite';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ScenarioCard from './ScenarioCard';
import scenarioStore from '../../store/scenarioStore';

const topPadding = window.innerWidth > 800 ? 70 : 110;
const bottomPadding = window.innerWidth > 800 ? 80 : 120;

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        paddingTop: topPadding,
        paddingBottom: bottomPadding,
    },
    paper: {
        height: 140,
        width: 400,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const SpacingGrid = (): React.ReactElement<{}> => {
    const handleSpacing = (): 10 | 8 | 6 | 4 | 2 => {
        switch (scenarioStore.scenarios.length) {
        case 4:
            return 8;
        case 5:
            return 6;
        case 6:
            return 4;
        default:
            if (scenarioStore.scenarios.length <= 3) {
                return 10;
            }
            return 2;
        }
    };

    const classes = useStyles();

    return (
        <Grid container className={classes.root} justify="center" spacing={2}>
            <Grid item xs={5}>
                <Grid container justify="center" spacing={handleSpacing()}>
                    {scenarioStore.scenarios.map(({
                        label, referenceUrl, url, cookiePath, readyEvent,
                        readySelector, delay, hoverSelector, clickSelector,
                        postInteractionWait, expect, misMatchThreshold,
                    }, index) => (<Grid key={index} item>
                        <ScenarioCard
                            id={index}
                            label={label}
                            refUrl={referenceUrl}
                            url={url}
                            cookiePath={cookiePath}
                            readyEvent={readyEvent}
                            readySelector={readySelector}
                            delay={delay}
                            hoverSelector={hoverSelector}
                            clickSelector={clickSelector}
                            postInteractionWait={postInteractionWait}
                            expect={expect}
                            misMatchThreshold={misMatchThreshold}
                        />
                    </Grid>))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default observer(SpacingGrid);
