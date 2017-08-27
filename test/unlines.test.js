const { unlines } = require ("../prelude");

test("join array of lines into string", () => {
    expect(unlines (["Line1", "Line2"])).toEqual("Line1\nLine2");
});

test("join empty array into empty string \"\"", () => {
    expect(unlines ([])).toEqual("");
});

