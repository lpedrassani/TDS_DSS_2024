
const db = {
    
    insertPostoColeta: jest.fn().mockResolvedValue({
      id: 1,
      nome: 'Posto A',
      endereco: 'Rua X, 123',
      latitude: 10.1234,
      longitude: 20.5678,
    }),
    getPostosColeta: jest.fn().mockResolvedValue([
      { id: 1, nome: 'Posto A', endereco: 'Rua X, 123' },
      { id: 2, nome: 'Posto B', endereco: 'Rua Y, 456' },
    ]),
    insertProduto: jest.fn().mockResolvedValue({
      id: 1,
      nome: 'Produto A',
      precoPorKilo: 15.5,
      postoColetaId: 1,
    }),
    getProdutos: jest.fn().mockResolvedValue([
      { id: 1, nome: 'Produto A', precoPorKilo: 15.5 },
      { id: 2, nome: 'Produto B', precoPorKilo: 20.0 },
    ]),
    end: jest.fn(), 
  };
  
//  module.exports = db;
  
  
  const request = require('supertest');
  const app = require('./index.js'); 
  //const db = require('../db');
  
  
  //jest.mock('../db');
  jest.mock(db);
  
  describe('API de Coleta e Produtos', () => {
    it('deve cadastrar um posto de coleta', async () => {
      const response = await request(app)
        .post('/cadastraColeta')
        .send({
          nome: 'Posto A',
          endereco: 'Rua X, 123',
          latitude: 10.1234,
          longitude: 20.5678,
        });
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.nome).toBe('Posto A');
      expect(db.insertPostoColeta).toHaveBeenCalledTimes(1);
    });
  
    it('deve listar postos de coleta', async () => {
      const response = await request(app).get('/listaColeta');
  
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(db.getPostosColeta).toHaveBeenCalledTimes(1);
    });
  
    it('deve cadastrar um produto', async () => {
      const response = await request(app)
        .post('/produtos')
        .send({
          nome: 'Produto A',
          precoPorKilo: 15.5,
          postoColetaId: 1,
        });
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.nome).toBe('Produto A');
      expect(db.insertProduto).toHaveBeenCalledTimes(1);
    });
  
    it('deve listar produtos', async () => {
      const response = await request(app).get('/produtos');
  
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(db.getProdutos).toHaveBeenCalledTimes(1);
    });
  });
  
  // Fechar a conexão do banco após os testes
  afterAll(() => {
    db.end();
  });