import React from 'react';

const UserTableRow = (props) => {
    return (
        <tr>
            <td><a href="#" data-id={props.id} className="deleteUser">Delete</a></td>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
        </tr>
    );
};

export default UserTableRow;
