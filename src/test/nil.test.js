const { nil } = require ("../preludium");

test("nil of array [] to be true", () => {
    expect(nil ([])).toBeTruthy();
});

test("nil of array [1] to be false", () => {
    expect(nil ([1])).toBeFalsy();
});

