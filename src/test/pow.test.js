const { pow } = require ("../index");

test("pow (3) (2) to be 8 [sic]", () => {
    expect(pow (3) (2)).toBe(8);
});

test("pow (2) (3) to be 9 [sic]", () => {
    expect(pow (2) (3)).toBe(9);
});

test("pow (0) (2) to be 1 [sic]", () => {
    expect(pow (0) (2)).toBe(1);
});

