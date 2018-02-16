const { sum } = require ("../index");

const arr = [1,2,3,4,5,6,7,8,9,10];

test("sum of array of numbers from 1 to 10 to be 55", () => {
    expect(sum (arr)).toBe(55);
});

test("sum of singleton array [1] to be 1", () => {
    expect(sum ([1])).toBe(1);
});

test("sum of the same array twice in a row", () => {
    expect(sum (arr)).toBe(55);
    expect(sum (arr)).toBe(55);
});

test("sum of empty array to be 0", () => {
    expect(sum ([])).toBe(0);
});

