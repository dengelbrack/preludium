const { ands } = require ("../prelude");

test("ands [true, true, true] is true", () => {
    expect(ands ([true, true, true])).toBeTruthy();
});

test("ands [true, false, true] is false", () => {
    expect(ands ([true, false, true])).toBeFalsy();
});

test("ands [false, false, false] is false", () => {
    expect(ands ([false, false, false])).toBeFalsy();
});

