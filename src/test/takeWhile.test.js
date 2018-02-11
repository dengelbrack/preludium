const { takeWhile } = require ("../preludium");

const lt3 = x => x < 3;

test("take items while less than 3 from array [1,2,3,4,5] to equal [1,2]", () => {
    expect(takeWhile (lt3) ([1,2,3,4,5])).toEqual([1,2]);
});

test("take items while less than 3 from array [3,4,5,6,7] to equal []", () => {
    expect(takeWhile (lt3) ([3,4,5,6,7])).toEqual([]);
});

test("take items while less than 3 from empty array [] to equal []", () => {
    expect(takeWhile (lt3) ([])).toEqual([]);
});

