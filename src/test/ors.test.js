const { ors } = require ("../index");

test("ors [true, true, true] is true", () => {
    expect(ors ([true, true, true])).toBeTruthy();
});

test("ors [true, false, true] is true", () => {
    expect(ors ([true, false, true])).toBeTruthy();
});

test("ors [false, false, false] is false", () => {
    expect(ors ([false, false, false])).toBeFalsy();
});

