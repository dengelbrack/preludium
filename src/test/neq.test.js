const { neq } = require ("../index");

test("1 is not equal to 1 is true", () => {
    expect(neq (1) (1)).toBeFalsy();
});

test("1 is not equal to 2 is false", () => {
    expect(neq (1) (2)).toBeTruthy();
});

test("'1' is not equal to '1' is true", () => {
    expect(neq ("1") ("1")).toBeFalsy();
});

test("'1' is not equal to '2' is false", () => {
    expect(neq ("1") ("2")).toBeTruthy();
});

test("1 is not equal to '1' is false", () => {
    expect(neq (1) ("1")).toBeTruthy();
});

test("1 is not equal to [1] is false", () => {
    expect(neq (1) ([1])).toBeTruthy();
});

test("[1] is not equal to [1] is false", () => {
    expect(neq ([1]) ([1])).toBeFalsy();
});

