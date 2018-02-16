const { odd } = require ("../index");

test("1 is odd", () => {
    expect(odd (1)).toBeTruthy();
});

test("-1 is odd", () => {
    expect(odd (-1)).toBeTruthy();
});

test("2 is not odd", () => {
    expect(odd (2)).toBeFalsy();
});

test("0 is not odd", () => {
    expect(odd (0)).toBeFalsy();
});

test("-2 is not odd", () => {
    expect(odd (-2)).toBeFalsy();
});

