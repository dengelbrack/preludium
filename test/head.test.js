const { head } = require ("../prelude");

test("head of array [1, 2, 3] to be 1", () => {
    expect(head ([1,2,3])).toBe(1);
});

test("head of singleton array [1] to be 1", () => {
    expect(head ([1])).toBe(1);
});

test("head of empty array [] to be undefined", () => {
    expect(head ([])).toBeUndefined();
});

