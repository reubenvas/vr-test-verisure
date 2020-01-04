/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css';
import generateCourseValue from './courseValue';
import { deleteUser, getUsers } from './api/userApi';

// debugger; For souremaps to find
const courseValue = generateCourseValue(1000);
// eslint-disable-next-line no-console
console.log(`I would pay ${courseValue} for this awesome course`);

export default generateCourseValue;

// Populate table of users via API call.
getUsers().then((result) => {
    let usersBody = '';

    result!.forEach((user) => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" onclick="removeUser" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    });

    document.querySelector('#users')!.innerHTML = usersBody;

    const deleteLinks = document.querySelectorAll('.deleteUser');

    // [...deleteLinks].forEach((link) => {
    //     link.onclick = (event: Event): void => {
    //         const element = event.target;
    //         event.preventDefault();
    //         deleteUser(element.attributes['data-id'].value);
    //         const row = element.parentNode.parentNode;
    //         row.parentNode.removeChild(row);
    //     };
    // });
});
