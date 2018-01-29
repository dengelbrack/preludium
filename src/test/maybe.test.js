const { Nothing, Just, maybe, odd, show } = require ("../prelude");

test("maybe false odd (Just 3)", () => {
    expect(maybe (false) (odd) (Just (3))).toBeTruthy();
});

test("maybe false odd Nothing", () => {
    expect(maybe (false) (odd) (Nothing)).toBeFalsy();
});

test("maybe \"\" show (Just 5)", () => {
    expect(maybe ("") (show) (Just (5))).toBe("5");
});

test("maybe \"\" show Nothing", () => {
    expect(maybe ("") (show) (Nothing)).toBe("");
});

