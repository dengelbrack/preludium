const { empty } = require ("../prelude");

test("empty of array [] to be true", () => {
    expect(empty ([])).toBeTruthy();
});

test("empty of array [1] to be false", () => {
    expect(empty ([1])).toBeFalsy();
});

