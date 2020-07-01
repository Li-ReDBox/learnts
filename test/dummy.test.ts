import { expect } from "chai";

describe("Just an expectation", () => {
    it("should done correctly", () => {
        expect({}).to.be.an('object');
    });
});