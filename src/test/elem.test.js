const { elem } = require ("../prelude");

test("3 to be element of array [1,2,3,4]", () => {
    expect(elem (3) ([1,2,3,4])).toBeTruthy();
});

test("5 to not be element of array [1,2,3,4]", () => {
    expect(elem (5) ([1,2,3,4])).toBeFalsy();
});

test("1 to not be element of empty array []", () => {
    expect(elem (1) ([])).toBeFalsy();
});

test("[3] to be element of array [[1],[2],[3],[4]]", () => {
    expect(elem ([3]) ([[1],[2],[3],[4]])).toBeTruthy();
});

