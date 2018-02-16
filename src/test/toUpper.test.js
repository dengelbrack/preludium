const { toUpper } = require ("../index");

test("toUpper ('a') to equal 'A'", () => {
    expect(toUpper ("a")).toBe("A");
});

test("toUpper (\"test\") to equal \"TEST\"", () => {
    expect(toUpper ("test")).toBe("TEST");
});

