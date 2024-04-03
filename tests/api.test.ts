import request from "supertest";
import app from '../src/app';

describe('app', () => {
    it('should return 404 on non-existing route', (done) => {
        request(app)
            .get('/route-that-doesnt-exist')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    })
})

describe('GET /', () => {
    it('responds with a json message', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: '✨Hi there✨'
            }, done);
    });
});