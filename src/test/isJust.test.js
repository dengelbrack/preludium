const { Nothing, Just, isJust } = require ("../index");

test("isJust Nothing", () => {
    expect(isJust (Nothing)).toBeFalsy();
});

test("isJust Just 1", () => {
    expect(isJust (Just (1))).toBeTruthy();
});

