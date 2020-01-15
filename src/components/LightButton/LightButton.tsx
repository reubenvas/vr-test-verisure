import React from 'react';
import styles from './styles.scss';

type propTypes = {
    label: string;
};

const LightButton = (props: propTypes): React.ReactElement<propTypes> => (
    <button className={styles.button}>{props.label}</button>
);

export default LightButton;
