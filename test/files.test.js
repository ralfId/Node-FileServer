const path = require('path');
const request = require('supertest');
const { describe, expect, test } = require('@jest/globals');

const baseUrl = 'http://localhost:4003';

describe('GET /api/files',() => {

    test('should return status code 400, invalid file extension', async () => {

        const filePath = path.join(__dirname, './testFiles', 'Ejercicio Node.pdf');

        const response = await request(baseUrl).post('/api/files').attach('file', filePath);

        expect(response.statusCode).toBe(400);
        expect(response.body.msg).toBe('Extension de archivo no valida');
    });

    test('should return 200 ', async () => {

        const filePath = path.join(__dirname, './testFiles', 'TEST_MOCK_DATA.csv');

        const response = await request(baseUrl).post('/api/files').attach('file', filePath);
        console.log(response.body);

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Archivo subido correctamente');
        expect(response.body.data).toHaveProperty('Nombre_Archivo');


    });
});