import request from 'supertest';
import app from './app';

describe('REST API', () => {
    test('GET to "/"', async (/* done */) => { // Heroku can't run this test. It gets a 404 status code.
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        /* done(); */
    });
});
