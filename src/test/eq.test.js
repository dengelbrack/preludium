const { eq } = require ("../prelude");

test("1 is equal to 1 is true", () => {
    expect(eq (1) (1)).toBeTruthy();
});

test("1 is equal to 2 is false", () => {
    expect(eq (1) (2)).toBeFalsy();
});

test("'1' is equal to '1' is true", () => {
    expect(eq ("1") ("1")).toBeTruthy();
});

test("'1' is equal to '2' is false", () => {
    expect(eq ("1") ("2")).toBeFalsy();
});

test("1 is equal to '1' is false", () => {
    expect(eq (1) ("1")).toBeFalsy();
});

test("1 is equal to [1] is false", () => {
    expect(eq (1) ([1])).toBeFalsy();
});

test("[1] is equal to [1] is false", () => {
    expect(eq ([1]) ([1])).toBeTruthy();
});

