const { unwords } = require ("../index");

test("join array of words into string", () => {
    expect(unwords (["This", "is", "a", "string."])).toEqual("This is a string.");
});

test("join empty array into empty string \"\"", () => {
    expect(unwords ([])).toEqual("");
});

