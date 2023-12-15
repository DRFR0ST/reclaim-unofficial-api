import { expect, test, beforeEach, describe } from "bun:test";
import { filterArray } from "../src/utils";

describe('Utils', () => {

    describe("filterArray", () => {
        test("should filter an array", () => {
            const array = [{title: "Test 1"}, {title: "Test 2"}, {title: "Test 3"}];
            
            const results = filterArray(array, { title: "Test 2" });
            expect(results).toBeTruthy();
        });
    })
});