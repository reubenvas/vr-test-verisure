import React from 'react';
import styles from './styles.scss'; // eslint-disable-line @typescript-eslint/no-unused-vars


type propTypes = {
    id: string;
    label: string;
    url: string;
    referenceUrl: string;
}

const UserTableRow = ({
    id, label, url, referenceUrl,
}: propTypes): React.ReactElement<propTypes> => (
    <tr>
        <td><a href="#" data-id={id} className="deleteUser">Delete</a></td>
        <td>{id}</td>
        <td>{label}</td>
        <td>{url}</td>
        <td>{referenceUrl}</td>
    </tr>
);

export default UserTableRow;
