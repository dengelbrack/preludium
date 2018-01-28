const { max } = require ("../prelude");

test("max (1) (2) to be 2", () => {
    expect(max (1) (2)).toBe(2);
});

test("max (2) (1) to be 2", () => {
    expect(max (2) (1)).toBe(2);
});

