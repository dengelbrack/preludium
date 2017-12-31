const { foldl1 } = require ("../prelude");

const add = x => y => x + y;
const arr = [1,2,3,4,5,6,7,8,9,10];

test("fold array of numbers to sum of numbers", () => {
    expect(foldl1 (add) (arr)).toBe(55);
});

test("last current value to be last of array", () => {
    expect(foldl1 (_ => x => x) (arr)).toBe(10);
});

test("fold the same array twice in a row", () => {
    expect(foldl1 (add) (arr)).toBe(55);
    expect(foldl1 (add) (arr)).toBe(55);
});

test("fold empty array [] to be undefined", () => {
    expect(foldl1 (add) ([])).toBeUndefined();
});

