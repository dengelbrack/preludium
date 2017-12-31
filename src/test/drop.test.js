const { drop } = require ("../prelude");

const arr = [1,2,3,4,5];

test("drop 3 items from array [1,2,3,4,5] to equal [4,5]", () => {
    expect(drop (3) (arr)).toEqual([4,5]);
});

test("drop 0 items from array [1,2,3,4,5] to equal entire array", () => {
    expect(drop (0) (arr)).toEqual(arr);
});

test("drop 1 items from empty array [] to equal []", () => {
    expect(drop (1) ([])).toEqual([]);
});

test("drop 6 items from array [1,2,3,4,5] to equal []", () => {
    expect(drop (6) (arr)).toEqual([]);
});

