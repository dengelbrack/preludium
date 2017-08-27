const { and } = require ("../prelude");

test("true and true is true", () => {
    expect(and (true) (true)).toBeTruthy();
});

test("true and false is false", () => {
    expect(and (true) (false)).toBeFalsy();
});

test("false and true is false", () => {
    expect(and (false) (true)).toBeFalsy();
});

test("false and false is false", () => {
    expect(and (false) (false)).toBeFalsy();
});

