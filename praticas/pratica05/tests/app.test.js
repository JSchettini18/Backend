const request = require('supertest');
const app = require('../app');

describe('Testes da API /tarefas', () => {
  let tarefaId;

  test('GET /tarefas -> 200 e JSON', async () => {
    const res = await request(app).get('/tarefas');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('POST /tarefas -> 201 e JSON', async () => {
    const res = await request(app)
      .post('/tarefas')
      .send({ nome: 'Estudar Node', concluida: false });
    expect(res.statusCode).toBe(201);
    tarefaId = res.body.id;
  });

  test('GET /tarefas/:id -> 200 e JSON', async () => {
    const res = await request(app).get(`/tarefas/${tarefaId}`);
    expect(res.statusCode).toBe(200);
  });

  test('GET /tarefas/1 -> 404', async () => {
    const res = await request(app).get('/tarefas/1');
    expect(res.statusCode).toBe(404);
  });

  test('PUT /tarefas/:id -> 200', async () => {
    const res = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: 'Estudar Node e Express', concluida: true });
    expect(res.statusCode).toBe(200);
  });

  test('PUT /tarefas/1 -> 404', async () => {
    const res = await request(app).put('/tarefas/1');
    expect(res.statusCode).toBe(404);
  });

  test('DELETE /tarefas/:id -> 204', async () => {
    const res = await request(app).delete(`/tarefas/${tarefaId}`);
    expect(res.statusCode).toBe(204);
  });

  test('DELETE /tarefas/1 -> 404', async () => {
    const res = await request(app).delete('/tarefas/1');
    expect(res.statusCode).toBe(404);
  });
});
