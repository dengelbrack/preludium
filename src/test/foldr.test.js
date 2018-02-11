const { foldr } = require ("../preludium");

const add = x => y => x + y;
const arr = [1,2,3,4,5,6,7,8,9,10];

test("fold array of numbers to sum of numbers", () => {
    expect(foldr (add) (0) (arr)).toBe(55);
});

test("last current value to be head of array", () => {
    expect(foldr (x => _ => x) (0) (arr)).toBe(1);
});

test("fold the same array twice in a row", () => {
    expect(foldr (add) (0) (arr)).toBe(55);
    expect(foldr (add) (0) (arr)).toBe(55);
});

test("fold empty array [] to be start value", () => {
    expect(foldr (add) (0) ([])).toBe(0);
});

