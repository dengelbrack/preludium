const { show, Nothing, Just, Left, Right } = require ("../preludium");

test("show 1", () => {
    expect(show (1)).toBe("1");
});

test("show \"1\"", () => {
    expect(show ("1")).toBe("\"1\"");
});

test("show []", () => {
    expect(show ([])).toBe("[]");
});

test("show [1]", () => {
    expect(show ([1])).toBe("[1]");
});

test("show [[1]]", () => {
    expect(show ([[1]])).toBe("[[1]]");
});

test("show true", () => {
    expect(show (true)).toBe("true");
});

test("show false", () => {
    expect(show (false)).toBe("false");
});

test("show Nothing", () => {
    expect(show (Nothing)).toBe("Nothing");
});

test("show Just (1)", () => {
    expect(show (Just (1))).toBe("Just (1)");
});

test("show Just (Just (1))", () => {
    expect(show (Just (Just (1)))).toBe("Just (Just (1))");
});

test("show [Just (1), Just (1)]", () => {
    expect(show ([Just (1), Just (1)])).toBe("[Just (1), Just (1)]");
});

test("show Left (\"Error\")", () => {
    expect(show (Left ("Error"))).toBe("Left (\"Error\")");
});

test("show Left (Left (\"Error\"))", () => {
    expect(show (Left (Left ("Error")))).toBe("Left (Left (\"Error\"))");
});

test("show Right (1)", () => {
    expect(show (Right (1))).toBe("Right (1)");
});

test("show Right (Right (1))", () => {
    expect(show (Right (Right (1)))).toBe("Right (Right (1))");
});

