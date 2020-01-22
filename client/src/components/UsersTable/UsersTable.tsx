import React, { useEffect, useState } from 'react';
import styles from './styles.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars
import UserTableRow from '../UserTableRow/UserTableRow';
import { getUsers } from '../../api/userApi';

type users = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}[] | null;

const UsersTable = (): React.ReactElement => {
    const [users, setUsers] = useState<users>([]);

    const fetchUsers = async (): Promise<void> => {
        try {
            const response = await getUsers();
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
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
