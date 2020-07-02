import request from "supertest";
import app from "../src/app";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });
});

// Promise way, no need for done
describe("GET /variable", () => {
    it("should return 200 with parameter", () => {
        return request(app).get("/variable/ddd")
            .expect("I have seen you say this ddd");
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

    it("- is allowed", (done) => {
        request(app).get("/delimiter/1-2")
            .expect(200, "part one = 1, part two = 2", done);
    });
});