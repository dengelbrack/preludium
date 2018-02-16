const { words } = require ("../index");

test("split string into array of words", () => {
    expect(words ("This is a string.")).toEqual(["This", "is", "a", "string."]);
});

test("split empty string \"\" into empty array []", () => {
    expect(words ("")).toEqual([]);
});

