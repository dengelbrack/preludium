const { Left, Right, isRight } = require ("../preludium");

test("isRight Left (\"foo\")", () => {
    expect(isRight (Left ("foo"))).toBeFalsy();
});

test("isRight Right 1", () => {
    expect(isRight (Right (1))).toBeTruthy();
});

