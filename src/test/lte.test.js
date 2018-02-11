const { lte } = require ("../preludium");

test("lte (2) (1) is true [sic]", () => {
    expect(lte (2) (1)).toBeTruthy();
});

test("lte (1) (2) is false [sic]", () => {
    expect(lte (1) (2)).toBeFalsy();
});

test("lte (1) (1) is true", () => {
    expect(lte (1) (1)).toBeTruthy();
});

