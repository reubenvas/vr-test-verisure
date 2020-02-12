import 'whatwg-fetch';
import { getUsers } from './scenarioApi';

describe('User api (from client)', () => {
    const usersMockResponse = [
        {
            id: 81413519,
            firstName: 'Tina',
            lastName: 'Renner',
            email: 'Nathaniel_Rippin@yahoo.com',
        },
        {
            id: 44568811,
            firstName: 'Glen',
            lastName: 'Hilpert',
            email: 'Gracie_Sauer13@gmail.com',
        },
        {
            id: 31923398,
            firstName: 'Dejon',
            lastName: 'Halvorson',
            email: 'Nickolas.Koepp@hotmail.com',
        },
    ];

    beforeAll(() => {
        jest.spyOn(global, 'fetch').mockImplementation((/* url, options */) => Promise.resolve({
            json: () => Promise.resolve(usersMockResponse),
        }));
    });


    afterEach(() => {
        window.fetch.mockClear();
    });
    afterAll(() => {
        window.fetch.mockRestore();
    });

    test('get users', async () => {
        const users = await getUsers();
        expect(users).toStrictEqual(usersMockResponse);
    });
});
