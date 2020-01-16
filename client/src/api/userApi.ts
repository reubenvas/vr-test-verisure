import 'whatwg-fetch';
import getGaseUrl from './baseUrl';

const baseUrl = getGaseUrl();

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const getUsers = (): Promise<User[] | null> => get('users');
export const deleteUser = (id: string): Promise<User[] | null> => del(`users/${id}`);

const get = async (path: string): Promise<User[] | null> => {
    let response: User[] | null;
    try {
        response = await (fetch(baseUrl + path).then((r) => r.json()));
        return response;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        throw err;
    }
};

const del = async (path: string): Promise<User[] | null> => {
    let response: User[] | null;
    try {
        response = await (fetch(baseUrl + path, { method: 'delete' }).then((r) => r.json()));
        return response;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        throw err;
    }
};
