const { quot } = require ("../prelude");

test("quot 3 10 to be [sic]", () => {
    expect(quot (3) (10)).toBe(3);
});

test("quot -3 10 to be [sic]", () => {
    expect(quot (-3) (10)).toBe(-3);
});
