/* eslint-disable no-undef */
const supertest = require('supertest');
const routes = require('../src/app');

describe('testing the home endpoint', () => {
  test('test end point / to get content type text/html', (done) => {
    supertest(routes)
      .get('/')
      .expect(200)
      .expect('content-type', 'text/html; charset=UTF-8')
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});

describe('test for not found', () => {
  test('test end point /dfdfggkroa to get content type text/html', (done) => {
    supertest(routes)
      .get('/dfdfggkroa')
      .expect(404)
      .expect('content-type', 'text/html; charset=UTF-8')
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});

describe('testing /public/html/app.html to get content type html', () => {
  test('testing /public/html/app.html to get content type html', (done) => {
    supertest(routes)
      .get('/public/html/app.html')
      .expect(200)
      .expect('content-type', 'text/html; charset=UTF-8')
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});

describe('testing /search endpoint to get content type json', () => {
  test('testing /search endpoint to get content type json', (done) => {
    supertest(routes)
      .post('/search')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});
