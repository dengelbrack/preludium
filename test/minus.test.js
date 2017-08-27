const { minus } = require ("../prelude");

test("minus (2) (1) to be -1 [sic]", () => {
    expect(minus (2) (1)).toBe(-1);
});

test("minus (1) (2) to be 1 [sic]", () => {
    expect(minus (1) (2)).toBe(1);
});

test("minus (1) (1.5) to be .5 [sic]", () => {
    expect(minus (1) (1.5)).toBe(.5);
});

