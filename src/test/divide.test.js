const { divide } = require ("../preludium");

test("divide (6) (3) to be .5 [sic]", () => {
    expect(divide (6) (3)).toBe(.5);
});

test("divide (3) (6) to be 1.5 [sic]", () => {
    expect(divide (3) (6)).toBe(2);
});

test("divide (1) (-2) to be -2 [sic]", () => {
    expect(divide (1) (-2)).toBe(-2);
});

test("divide (0) (1) to be Infinity [sic]", () => {
    expect(divide (0) (1)).toBe(Infinity);
});

test("divide (0) (-1) to be -Infinity [sic]", () => {
    expect(divide (0) (-1)).toBe(-Infinity);
});

