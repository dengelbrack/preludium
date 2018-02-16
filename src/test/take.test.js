const { take } = require ("../index");

const arr = [1,2,3,4,5];

test("take 3 items from array [1,2,3,4,5] to equal [1,2,3]", () => {
    expect(take (3) (arr)).toEqual([1,2,3]);
});

test("take 0 items from array [1,2,3,4,5] to equal []", () => {
    expect(take (0) (arr)).toEqual([]);
});

test("take 1 items from empty array [] to equal []", () => {
    expect(take (1) ([])).toEqual([]);
});

test("take 6 items from array [1,2,3,4,5] to equal entire array", () => {
    expect(take (6) (arr)).toEqual(arr);
});

