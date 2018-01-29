const { Nothing, Just, isJust } = require ("../prelude");

test("isJust Nothing", () => {
    expect(isJust (Nothing)).toBeFalsy();
});

test("isJust Just 1", () => {
    expect(isJust (Just (1))).toBeTruthy();
});

