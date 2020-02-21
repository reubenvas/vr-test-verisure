import { Scenario } from 'backstopjs';

const baseUrl = '/api/';


export const postScenarios = (scenarios: string): Promise<Scenario[]> | null => {
    try {
        return fetch(`${baseUrl}scenarios`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: scenarios, // Scenario[]
        }).then((r) => r.json());
    } catch (err) {
        console.error(err); // eslint-disable-line no-console
        console.trace(); // eslint-disable-line no-console
        return null;
    }
};

export const getScenarios = (): Promise<Scenario[] | null> => get('scenarios');
export const deleteScenario = (id: string): Promise<Scenario[] | null> => del(`scenarios/${id}`);

const get = async (path: string): Promise<Scenario[] | null> => {
    let response: Scenario[] | null;
    try {
        response = await (fetch(baseUrl + path).then((r) => r.json()));
        return response;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        throw err;
    }
};

const del = async (path: string): Promise<Scenario[] | null> => {
    let response: Scenario[] | null;
    try {
        response = await (fetch(baseUrl + path, { method: 'delete' }).then((r) => r.json()));
        return response;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        throw err;
    }
};
