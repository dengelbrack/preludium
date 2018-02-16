const { gt } = require ("../index");

test("gt (2) (1) is false [sic]", () => {
    expect(gt (2) (1)).toBeFalsy();
});

test("gt (1) (2) is true [sic]", () => {
    expect(gt (1) (2)).toBeTruthy();
});

test("gt (1) (1) is false", () => {
    expect(gt (1) (1)).toBeFalsy();
});

