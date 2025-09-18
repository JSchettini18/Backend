const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Testes da API tarefa', () => {
    test('GET /tarefas deve retornar 200', async () => {
        const response = await request.get('/tarefas');
        expect(response.status).toBe(200);
    });
})