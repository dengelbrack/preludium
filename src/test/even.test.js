const { even } = require ("../preludium");

test("2 is even", () => {
    expect(even (2)).toBeTruthy();
});

test("0 is even", () => {
    expect(even (0)).toBeTruthy();
});

test("-2 is even", () => {
    expect(even (-2)).toBeTruthy();
});

test("1 is not even", () => {
    expect(even (1)).toBeFalsy();
});

test("-1 is not even", () => {
    expect(even (-1)).toBeFalsy();
});

