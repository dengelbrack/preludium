const { min } = require ("../preludium");

test("min (1) (2) to be 1", () => {
    expect(min (1) (2)).toBe(1);
});

test("min (2) (1) to be 1", () => {
    expect(min (2) (1)).toBe(1);
});

