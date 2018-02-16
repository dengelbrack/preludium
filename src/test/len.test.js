const { len } = require ("../index");

test("length of array [1,2,3] to be 3", () => {
    expect(len ([1,2,3])).toBe(3);
});

test("length of empty array [] to be 0", () => {
    expect(len ([])).toBe(0);
});

