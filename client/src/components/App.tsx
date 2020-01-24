import React from 'react';
import styles from '../styles/main.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars

import DarkButton from './DarkButton/DarkButton';
import LightButton from './LightButton/LightButton';
import UsersTable from './UsersTable/UsersTable';


const App = (): React.ReactElement => (
    <div className={`hello-world ${styles.app}`} >
        <h1>Hello World</h1>
        <p>Hello you!</p>
        <p>Hello you!</p>
        <p>Reuuuuuuben</p>
        <LightButton label='Light mode'/>
        <DarkButton label='Dark mode'/>
        <UsersTable />
    </div>
);
export default App;
