const { Nothing, Just, isNothing } = require ("../index");

test("isNothing Nothing", () => {
    expect(isNothing (Nothing)).toBeTruthy();
});

test("isNothing Just 1", () => {
    expect(isNothing (Just (1))).toBeFalsy();
});

