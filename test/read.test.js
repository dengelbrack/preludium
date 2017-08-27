const { read } = require ("../prelude");

test("read \"1\" to be 1", () => {
    expect(read ("1")).toBe(1);
});

test("read \"\"1\"\" to be \"1\"", () => {
    expect(read ("\"1\"")).toBe("1");
});

test("read \"[1]\" to equal [1]", () => {
    expect(read ("[1]")).toEqual([1]);
});

test("read \"{\"n\":1}\" to equal {\"n\":1}", () => {
    expect(read ("{\"n\":1}")).toEqual({"n":1});
});

