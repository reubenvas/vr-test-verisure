import React from 'react';
import styles from './styles.scss';


type propTypes = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

const UserTableRow = (props: propTypes): React.ReactElement<propTypes> => (
    <tr>
        <td><a href="#" data-id={props.id} className="deleteUser">Delete</a></td>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
    </tr>
);

export default UserTableRow;
