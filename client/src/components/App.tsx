import React from 'react';
import '../styles/main.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars

import DarkButton from './DarkButton/DarkButton';
import LightButton from './LightButton/LightButton';
import UsersTable from './UsersTable/UsersTable';
import ScenarioInputForm from './ScenarioInputForm/ScenarioInputForm';
import BulmaTest from './mui/GridLayout';
import TopBar from './mui/TopBar';
import BottomBar from './mui/BottomBar';
import FormDialog from './mui/FormDialog';


const App = (): React.ReactElement => (
    <div className={`hello-world ${' '}`} >
        <TopBar />
        <BulmaTest />
        <FormDialog />
        <LightButton label='Light mode'/>
        <DarkButton label='Dark mode'/>
        <ScenarioInputForm />
        <UsersTable />
        <BottomBar />
    </div>
);
export default App;
