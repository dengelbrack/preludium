const { dropWhile } = require ("../preludium");

const lt3 = x => x < 3;

test("drop items while less than 3 from array [1,2,3,4,5] to equal [3,4,5]", () => {
    expect(dropWhile (lt3) ([1,2,3,4,5])).toEqual([3,4,5]);
});

test("drop items while less than 3 from array [3,4,5,6,7] to equal []", () => {
    expect(dropWhile (lt3) ([3,4,5,6,7])).toEqual([3,4,5,6,7]);
});

test("drop items while less than 3 from empty array [] to equal []", () => {
    expect(dropWhile (lt3) ([])).toEqual([]);
});

