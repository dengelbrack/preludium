const { show } = require ("../prelude");

test("show 1 to be \"1\"", () => {
    expect(show (1)).toBe("1");
});

test("show \"1\" to be \"\"1\"\"", () => {
    expect(show ("1")).toBe("\"1\"");
});

test("show [1] to equal \"[1]\"", () => {
    expect(show ([1])).toEqual("[1]");
});

