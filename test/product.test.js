const { product } = require ("../prelude");

const arr = [1,2,3,4,5,6,7,8,9,10];

test("product of array of numbers from 1 to 10 to be 3628800", () => {
    expect(product (arr)).toBe(3628800);
});

test("product of singleton array [1] to be 1", () => {
    expect(product ([1])).toBe(1);
});

test("product of two arrays one after the other", () => {
    expect(product (arr)).toBe(3628800);
    expect(product (arr)).toBe(3628800);
});

test("product empty array to be 1", () => {
    expect(product ([])).toBe(1);
});

