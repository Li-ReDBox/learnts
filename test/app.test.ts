import request from "supertest";
import app from "../src/app";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });
});

describe("GET /variable", () => {
    it("should return 200 with parameter", (done) => {
        request(app).get("/variable/ddd")
            .expect("I have seen you say this ddd", done);
    });
});

describe("Delimiter is flexible", () => {
    it("dot is allowed", (done) => {
        request(app).get("/delimiter/1.2")
            .expect(200, "part one = 1, part two = 2", done);
    });
    
    it("x is allowed", (done) => {
        request(app).get("/delimiter/1x2")
            .expect(200, "part one = 1, part two = 2", done);
    });
});