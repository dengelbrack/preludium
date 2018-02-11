const { times } = require ("../preludium");

test("times (2) (1) to be 2", () => {
    expect(times (2) (1)).toBe(2);
});

test("times (1) (-2) to be -2", () => {
    expect(times (1) (-2)).toBe(-2);
});

test("times (1) (1.5) to be 1.5", () => {
    expect(times (1) (1.5)).toBe(1.5);
});

