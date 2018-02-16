const { foldl } = require ("../index");

const add = x => y => x + y;
const arr = [1,2,3,4,5,6,7,8,9,10];

test("fold array of numbers to sum of numbers", () => {
    expect(foldl (add) (0) (arr)).toBe(55);
});

test("last current value to be last of array", () => {
    expect(foldl (_ => x => x) (0) (arr)).toBe(10);
});

test("fold the same array twice in a row", () => {
    expect(foldl (add) (0) (arr)).toBe(55);
    expect(foldl (add) (0) (arr)).toBe(55);
});

test("fold empty array [] to be start value", () => {
    expect(foldl (add) (0) ([])).toBe(0);
});

