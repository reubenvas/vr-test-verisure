import React, { useEffect, useState } from 'react';
import UserTableRow from '../UserTableRow/UserTableRow';
import { getUsers } from '../../api/userApi';

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

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
                {users.map((user) => (
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
