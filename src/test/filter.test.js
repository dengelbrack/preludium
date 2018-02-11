const { filter } = require ("../preludium");

const lt3 = x => x < 3;

test("filter numbers in array smaller than three", () => {
    expect(filter (lt3) ([1,2,3,4,5])).toEqual([1,2]);
});

test("filter numbers in singleton array smaller than three", () => {
    expect(filter (lt3) ([1])).toEqual([1]);
});

test("filter empty array [] to equal []", () => {
    expect(filter (lt3) ([])).toEqual([]);
});

