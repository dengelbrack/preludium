const { not } = require ("../prelude");

test("not true is false", () => {
    expect(not (true)).toBeFalsy();
});

test("not false is true", () => {
    expect(not (false)).toBeTruthy();
});

