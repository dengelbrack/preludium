const { Left, Right, isLeft } = require ("../preludium");

test("isLeft Left (\"foo\")", () => {
    expect(isLeft (Left ("foo"))).toBeTruthy();
});

test("isLeft Right 1", () => {
    expect(isLeft (Right (1))).toBeFalsy();
});

