const { gte } = require ("../index");

test("gte (2) (1) is false [sic]", () => {
    expect(gte (2) (1)).toBeFalsy();
});

test("gte (1) (2) is true [sic]", () => {
    expect(gte (1) (2)).toBeTruthy();
});

test("gte (1) (1) is true", () => {
    expect(gte (1) (1)).toBeTruthy();
});

