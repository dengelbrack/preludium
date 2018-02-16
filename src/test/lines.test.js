const { lines } = require ("../index");

test("split string into array of lines", () => {
    expect(lines ("Line1\nLine2")).toEqual(["Line1", "Line2"]);
});

test("split empty string into array w/ empty string [\"\"]", () => {
    expect(lines ("")).toEqual([""]);
});

