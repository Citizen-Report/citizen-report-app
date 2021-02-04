const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-type', /text\/html/)
          .expect(200);
      });
    });
  });
  //more describes
  describe('/api/complaints,' () => {
    describe('GET', () => {
      it('responds with 200 status and complaint data', () => {
        return request(server)
          .get('/api/complaints')
      })
    })
  })
});
