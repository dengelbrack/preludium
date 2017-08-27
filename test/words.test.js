const { words } = require ("../prelude");

test("split string into array of words", () => {
    expect(words ("This is a string.")).toEqual(["This", "is", "a", "string."]);
});

test("split empty string into array w/ empty string [\"\"]", () => {
    expect(words ("")).toEqual([""]);
});

