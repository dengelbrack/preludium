const { mod } = require ("../prelude");

test("mod 3 10 to be [sic]", () => {
    expect(mod (3) (10)).toBe(1);
});

test("mod -3 10 to be [sic]", () => {
    expect(mod (-3) (10)).toBe(-2);
});

