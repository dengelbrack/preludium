const { toLower } = require ("../preludium");

test("toLower ('A') to equal 'a'", () => {
    expect(toLower ("A")).toBe("a");
});

test("toLower (\"TEST\") to equal \"test\"", () => {
    expect(toLower ("TEST")).toBe("test");
});

