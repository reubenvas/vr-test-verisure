import React from 'react';
import { observer } from 'mobx-react';
import styles from './styles.scss';

import testStore from '../../store/testStore';

type propTypes = {
    label: string;
};

const LightButton = (props: propTypes): React.ReactElement<propTypes> => {
    const { timesClicked } = testStore;
    const { increaseTimesClicked } = testStore;
    return (
        <button onClick={() => increaseTimesClicked(timesClicked + 1)} className={`${styles.button} button is-large`}>{`${props.label} ${timesClicked}`}</button>
    );
};

export default observer(LightButton);
