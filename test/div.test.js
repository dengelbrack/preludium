const { div } = require ("../prelude");

test("div 3 10 to be [sic]", () => {
    expect(div (3) (10)).toBe(3);
});

test("div -3 10 to be [sic]", () => {
    expect(div (-3) (10)).toBe(-4);
});

