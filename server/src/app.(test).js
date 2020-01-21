import request from 'supertest';
import app from './app';

describe('REST API', () => {
    test('GET to "/"', async (/* done */) => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        /* done(); */
    });
});
