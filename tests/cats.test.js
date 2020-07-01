const request = require("supertest");
const Cat = require('../src/models/cats');
const CatRouter = require('../src/routes/cats');

jest.mock('../src/models/cats');
jest.mock('../src/routes/cats');

describe("Test the Cat path", () => {
    test('It should return all cat by id', done => {
        const cat = {
            id: 0,
            name: 'Boss Cat'
        }
        const resp = {
            error: false,
            message: '',
            data: cat
        }
        Cat.get.mockResolvedValue(resp);

        request(CatRouter)
            .get('/0')
            .then(response => {
                expect(response.code).toBe(200);
                expect(response.body).toHaveProperty('error', false);
                expect(response.body).toHaveProperty('message', '');
                expect(response.body).toHaveProperty('data', cat);
                done();
            });

    })
})