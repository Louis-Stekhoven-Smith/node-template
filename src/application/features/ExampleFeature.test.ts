import ExampleFeature from './ExampleFeature';

const request = require('supertest');
const express = require('express');

const TALENT_IDS = ['1', '3'];

describe('ExampleFeature tests', () => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/', ExampleFeature.process);

  test('Returns 200 with valid input', (done) => {
    request(app).post('/')
      .query('client=clientId')
      .send({ talentIds: TALENT_IDS })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('Returns 400 for bad request', (done) => {
    request(app).get('/')
      .query('client=clientId')
      .expect('Content-Type', /text/)
      .expect(400, done);
  });
});
