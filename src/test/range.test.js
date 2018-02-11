const { range } = require ("../preludium");

test("range from 2 to 5 to equal [2,3,4,5]", () => {
    expect(range (2) (5)).toEqual([2,3,4,5]);
});

test("range from 2 to 2 to equal [2]", () => {
    expect(range (2) (2)).toEqual([2]);
});

test("range from -2 to 1 to equal [-2,-1,0,1]", () => {
    expect(range (-2) (1)).toEqual([-2,-1,0,1]);
});

test("range from 5 to 1 to equal empty array []", () => {
    expect(range (5) (1)).toEqual([]);
});

test("range from 5 to -1 to equal empty array []", () => {
    expect(range (5) (-1)).toEqual([]);
});

