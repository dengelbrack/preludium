const { nub } = require ("../index");

test("nub of array [1,2,3,1] to equal [1,2,3]", () => {
    expect(nub ([1,2,3,1])).toEqual([1,2,3]);
});

test("nub of array [] to equal []", () => {
    expect(nub ([])).toEqual([]);
});

