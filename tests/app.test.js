const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toHaveProperty('error', false);
                expect(response.body).toHaveProperty('message', 'CatBook backend server');
                done();
            });
    });
    test("It should response as the 404 error", done => {
        request(app)
            .get("/testing_path_without_endpoint")
            .then(response => {
                expect(response.statusCode).toBe(404);
                expect(response.body).toHaveProperty('error', true);
                expect(response.body).toHaveProperty('message', 'Error 404. Not found');
                done();
            });
    });
});