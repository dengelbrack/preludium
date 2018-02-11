const { Nothing, Just, isJust } = require ("../preludium");

test("isJust Nothing", () => {
    expect(isJust (Nothing)).toBeFalsy();
});

test("isJust Just 1", () => {
    expect(isJust (Just (1))).toBeTruthy();
});

