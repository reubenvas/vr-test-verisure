import React, { useEffect, useState } from 'react';
import styles from './styles.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars
import UserTableRow from '../UserTableRow/UserTableRow';
import { getScenarios } from '../../api/scenarioApi';

type users = {
    id: string;
    label: string;
    cookiePath: string;
    url: string;
    referenceUrl: string;
    readyEvent: string;
    readySelector: string;
    delay: number;
    hoverSelector: string;
    clickSelector: string;
    postInteractionWait: number;
    selectorExpansion: boolean;
    expect: number;
    misMatchThreshold: number;
    requireSameDimensions: boolean;
}[] | null;

const UsersTable = (): React.ReactElement => {
    const [users, setUsers] = useState<users>([]);

    const fetchUsers = async (): Promise<void> => {
        try {
            const response = await getScenarios();
            setUsers(response);
        } catch (err) {
            console.log(err); // eslint-disable-line no-console
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(process.env.TEST_GREETING);

    return (
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody id="users">
                {users && users.map((user) => (
                    <UserTableRow
                        key={user.id}
                        id={user.id}
                        url={user.url}
                        referenceUrl={user.referenceUrl}
                        label={user.label}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
