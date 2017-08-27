const { last } = require ("../prelude");

test("last of array [1, 2, 3] to be 3", () => {
    expect(last ([1,2,3])).toBe(3);
});

test("last of singleton array [1] to be 1", () => {
    expect(last ([1])).toBe(1);
});

test("last of empty array [] to be undefined", () => {
    expect(last ([])).toBeUndefined();
});

