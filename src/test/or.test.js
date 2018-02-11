const { or } = require ("../preludium");

test("true or true is true", () => {
    expect(or (true) (true)).toBeTruthy();
});

test("true or false is true", () => {
    expect(or (true) (false)).toBeTruthy();
});

test("false or true is true", () => {
    expect(or (false) (true)).toBeTruthy();
});

test("false or false is false", () => {
    expect(or (false) (false)).toBeFalsy();
});

