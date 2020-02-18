import React from 'react';
import '../styles/main.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars
import GridLlayout from './mui/GridLayout';
import TopBar from './mui/TopBar';
import BottomBar from './mui/BottomBar';

const App = (): React.ReactElement => (
    <div className={`hello-world ${' '}`} >
        <TopBar />
        <GridLlayout />
        <BottomBar />
    </div>
);
export default App;
