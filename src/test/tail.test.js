const { tail } = require ("../index");

test("tail of array [1, 2, 3] to equal [2, 3]", () => {
    expect(tail ([1,2,3])).toEqual([2,3]);
});

test("tail of array [1, 2] to equal [2]", () => {
    expect(tail ([1,2])).toEqual([2]);
});

test("tail of singleton array [1] to equal []", () => {
    expect(tail ([1])).toEqual([]);
});

test("tail of empty array [] to equal []", () => {
    expect(tail ([])).toEqual([]);
});

