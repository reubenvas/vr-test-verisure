import 'whatwg-fetch';
import getGaseUrl from './baseUrl';

const baseUrl = getGaseUrl();

type Scenario = {
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
}

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
