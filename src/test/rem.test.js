const { rem } = require ("../index");

test("rem 3 10 to be [sic]", () => {
    expect(rem (3) (10)).toBe(1);
});

test("rem -3 10 to be [sic]", () => {
    expect(rem (-3) (10)).toBe(1);
});

